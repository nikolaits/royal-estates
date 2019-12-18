import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ILocation } from "./location";
import { LocationsService } from "./locations.service";
@Component({
  selector: 'app-locations',
  templateUrl: './locations.page.html',
  styleUrls: ['./locations.page.scss'],
})
export class LocationsPage implements OnInit {
  public errorMessage: string;
  locations: ILocation[];
  constructor(private _locationsService: LocationsService, private router: Router) { }

  ngOnInit() {
    this._locationsService.getLocations()
    .subscribe({
      next: locations => {
          this.locations = locations;
          console.log("loc",locations)
      },
      error: error => this.errorMessage = <any>error
  });
  }
  onClick(id:string){
    // alert("test "+id);
    this.router.navigate(['/estates/1']);
  }
}
