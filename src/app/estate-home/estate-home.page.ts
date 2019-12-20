import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';
import {Events, MenuController} from "@ionic/angular";

@Component({
  selector: 'app-estate-home',
  templateUrl: './estate-home.page.html',
  styleUrls: ['./estate-home.page.scss'],
})
export class EstateHomePage implements OnInit {
  public locid: string = "";
  public locName: string = "";
  public refNumber: string = "";
  public isDataFromStorage: boolean = false;
  constructor(public menuCtrl: MenuController, private dataService:DataService, public events:Events) { }

  ngOnInit() {
    this.locid = this.dataService.getLocationId();
    this.locName = this.dataService.getLocationName();
    this.refNumber = this.dataService.getRefNumber();
    this.isDataFromStorage = this.dataService.getIsDataFromStorage();
    this.events.subscribe('refNumChanged', (args:string) => {
      this.refNumber = args;
    })
  }
  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }
}
