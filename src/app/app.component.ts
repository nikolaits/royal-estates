import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Storage } from '@ionic/storage';
import {ISavedEstate} from "./shared/savedestate"
import { DataService } from './shared/data.service';
import { Router } from '@angular/router';
import { Events } from "@ionic/angular";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public appPages: ISavedEstate[] = [];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private storage: Storage, 
    private dataService:DataService, 
    private router: Router, 
    public events: Events
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit(){
    this.storage.get('savedEstates').then((val) => {
      if(val != null){
        this.appPages = JSON.parse(val);
      }
    });
    this.events.subscribe('savedEstatesChanged', (arr: ISavedEstate[]) => {
      this.appPages = arr;
    })
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
