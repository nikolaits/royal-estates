import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import {ISavedEstate} from "../shared/savedestate"
import { DataService } from '../shared/data.service';
import { Router } from '@angular/router';
import { Events, MenuController } from "@ionic/angular";
@Component({
  selector: 'app-my-estates',
  templateUrl: './my-estates.page.html',
  styleUrls: ['./my-estates.page.scss'],
})
export class MyEstatesPage implements OnInit {
  public savedEstates: ISavedEstate[] = [];
  constructor(public menuCtrl: MenuController, private storage: Storage, private dataService:DataService, private router: Router, public events: Events) { }

  ngOnInit() {
    this.storage.get('savedEstates').then((val) => {
      // alert("savedEstates "+val)
      if(val != null){
        this.savedEstates = JSON.parse(val);
      }
    });
    this.events.subscribe('savedEstatesChanged', (arr: ISavedEstate[]) => {
      this.savedEstates = arr;
    })
  }
  ionViewWillEnter() {
    this.menuCtrl.enable(true);
  }
  onClick(estateid, estateregion, locationId, locationName, refNumber, latitude, longitude){
    this.dataService.setEstId(estateid);
    this.dataService.setLocationId(locationId);
    this.dataService.setLocationName(locationName);
    this.dataService.setRefNumber(refNumber);
    this.dataService.setLatitude(latitude);
    this.dataService.setLongitude(longitude);
    this.dataService.setRegion(estateregion);
    this.dataService.setIsDataFromStorage(true);
    this.router.navigate(['/estate-home']);
  }

}
