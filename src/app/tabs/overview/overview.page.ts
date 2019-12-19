import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.page.html',
  styleUrls: ['./overview.page.scss'],
})
export class OverviewPage implements OnInit {

  constructor(private dataService:DataService) { }

  ngOnInit() {
    let locId = this.dataService.getLocationId();
    // alert("Loc id "+locId);
  }

}
