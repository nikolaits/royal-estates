import { Component, OnInit, OnDestroy } from '@angular/core';
import { EstatehomeService } from 'src/app/shared/estatehome.service';
import { LoadingController, Events } from '@ionic/angular';
import { DataService } from 'src/app/shared/data.service';
import * as _ from 'lodash';
import { Router } from '@angular/router';
import { IEstate } from "../../shared/estate";
@Component({
  selector: 'app-similar',
  templateUrl: './similar.page.html',
  styleUrls: ['./similar.page.scss'],
})
export class SimilarPage implements OnInit, OnDestroy {
  private segmtbarValue = "all";
  private selectValue = "House"
  private locId: string = "";
  private region: string = "";
  public name: string = "";
  private subscription;
  public errorMessage: string;
  public result: _.Dictionary<string | IEstate[]>[];
  public listarray = [];
  public isDisabled: boolean = true;
  private tmpRegionArr = [];
  private isFilterEnabled = false;

  constructor(private _estatehomeService: EstatehomeService, public loadingController: LoadingController, private dataService: DataService, private router: Router, public events: Events) { }

  ngOnInit() {
    this.locId = this.dataService.getLocationId();
    this.name = this.dataService.getLocationName();
    this.region = this.dataService.getRegion();
    this.presentLoading()
    this.subscription = this._estatehomeService.getEstates(this.locId)
      .subscribe({
        next: estates => {
          const tmpstates: IEstate[] = estates;
          this.result = _.chain(tmpstates).groupBy("region")
            .toPairs()
            .map(function (currentData) {
              return _.zipObject(["region", "estates"], currentData);
            })
            .value();
          setTimeout(() => {
            this.loadingController.dismiss();
          }, 2000);
          this.listarray = this.result;
        },
        error: error => this.errorMessage = <any>error
      });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
  segmentChanged(args) {
    this.segmtbarValue = args.detail.value;
    if (this.segmtbarValue == "all") {
      this.listarray = [];
      this.tmpRegionArr = [];
      if (this.isFilterEnabled) {
        this.filterData()
      } else {
        this.listarray = this.result;
      }
    } else {
      const tmpobject = _.find(this.result, ['region', this.region]);
      this.tmpRegionArr = [tmpobject];
      if (this.isFilterEnabled) {
        this.filterData()
      } else {
        this.listarray = this.tmpRegionArr;
      }
    }

  }

  onIonChange(args) {
    if (this.isFilterEnabled) {
      this.selectValue = args.detail.value;
      this.filterData();
    }

  }
  onToggleChange(args) {
    this.isFilterEnabled = args.detail.checked;
    console.log("Objct ", args);
    if (args.detail.checked) {

      this.isDisabled = false;
      this.filterData();
    } else {
      this.isDisabled = true;
      this.listarray = [];
      if (this.segmtbarValue == "all") {
        this.listarray = this.result;
      } else {
        this.listarray = this.tmpRegionArr;
      }
    }
  }
  filterData() {
    this.listarray = [];
    let arr = [];
    if (this.segmtbarValue == "all") {
      arr = this.result;
    } else {
      arr = this.tmpRegionArr;
    }
    arr.forEach((e: any) => {
      let tmparr = _.map(e.estates, o => {
        if (o.type == this.selectValue) return o;
      });

      tmparr = _.without(tmparr, undefined);
      if (tmparr.length > 0) {
        this.listarray.push({ region: e.region, estates: tmparr });
      }

    })
  }
  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Loadind data'
    });
    await loading.present();
  }

  onClick(estateid, estateregion, refNumber, latitude, longitude) {
    this.dataService.setEstId(estateid);
    this.dataService.setLocationId(this.locId);
    this.dataService.setLocationName(this.name);
    this.dataService.setRefNumber(refNumber);
    this.dataService.setLatitude(latitude);
    this.dataService.setLongitude(longitude);
    this.dataService.setRegion(estateregion);
    this.dataService.setIsDataFromStorage(true);
    this.events.publish("refNumChanged", refNumber);
    this.router.navigate(['/estate-home']);
  }
}
