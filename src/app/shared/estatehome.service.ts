import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import {IEstate} from "./estate";

@Injectable({
  providedIn: 'root'
})
export class EstatehomeService {
  private _mainUrl = 'https://royal-estates-ba14f.firebaseio.com/locations-data/';

  constructor(private _http: HttpClient) { }

  getEstates(id: string): Observable<IEstate[]> {
      const estatesUrl = this._mainUrl+id+"/estates.json";
      return this._http.get<IEstate[]>(estatesUrl).pipe(
          tap(data => console.log('All: ' + JSON.stringify(data))),
          catchError(this.handleError)
      );
  }

  getEstate(id: string, estid: string): Observable<IEstate> {
    const estatesUrl = this._mainUrl+id+"/estates/"+estid+".json";
    console.log("estatesUrl ", estatesUrl);
    return this._http.get<IEstate>(estatesUrl).pipe(
        tap(data => console.log('All: ' + JSON.stringify(data))),
        catchError(this.handleError)
    );
}

  private handleError(err: HttpErrorResponse) {
      console.error(err);
      return Observable.throw(err);
  }
}
