import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../shared/data.service';


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
  constructor(private route: ActivatedRoute, private dataService:DataService) { }

  ngOnInit() {
    this.locid = this.dataService.getLocationId();
    this.locName = this.dataService.getLocationName();
    this.refNumber = this.dataService.getRefNumber();
    this.isDataFromStorage = this.dataService.getIsDataFromStorage();
  }

}
