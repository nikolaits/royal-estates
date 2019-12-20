import { Component, OnInit, OnDestroy } from '@angular/core';
import {Router} from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { ILocation } from "./location";
import { LocationsService } from "./locations.service";
@Component({
  selector: 'app-locations',
  templateUrl: './locations.page.html',
  styleUrls: ['./locations.page.scss'],
})
export class LocationsPage implements OnInit, OnDestroy {
  private subscription;
  public errorMessage: string;
  locations: ILocation[];
  constructor(private _locationsService: LocationsService, private router: Router, public loadingController: LoadingController) { }

  ngOnInit() {
    this.presentLoading()
    this.subscription = this._locationsService.getLocations()
    .subscribe({
      next: locations => {
          this.locations = locations;
          console.log("loc",locations);
          setTimeout(() => {
            this.loadingController.dismiss();
          }, 2000);
          
      },
      error: error => this.errorMessage = <any>error
    });
  }
  ngOnDestroy(){
    this.subscription.unsubscribe()
  }
  onClick(id:string, name:string){ 
    this.router.navigate(['/estates', id, name]);
  }
  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Loadind data'
    });
    await loading.present();
  }
}
