import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import {ILocation} from "./location"
@Injectable({
  providedIn: 'root'
})
export class LocationsService {
  private _locationsUrl = 'https://royal-estates-ba14f.firebaseio.com/locations.json';

  constructor(private _http: HttpClient) { }

  getLocations(): Observable<ILocation[]> {
    console.log("here")
      return this._http.get<ILocation[]>(this._locationsUrl).pipe(
          tap(data => console.log('All: ' + JSON.stringify(data))),
          catchError(this.handleError)
      );
  }

  private handleError(err: HttpErrorResponse) {
      console.error(err);
      return Observable.throw(err);
  }
}
