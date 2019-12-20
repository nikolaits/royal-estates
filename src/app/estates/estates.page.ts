import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { IEstate } from "../shared/estate";
import { EstatesService } from "./estates.service";
import * as _ from 'lodash';
import { DataService } from '../shared/data.service';
@Component({
  selector: 'app-estates',
  templateUrl: './estates.page.html',
  styleUrls: ['./estates.page.scss'],
})
export class EstatesPage implements OnInit, OnDestroy {
  private locId:string = "";
  public name: string = "";
  private subscription;
  public errorMessage: string;
  public result: _.Dictionary<string | IEstate[]>[];
  constructor(private _estatesService: EstatesService, private activatedRoute: ActivatedRoute, public loadingController: LoadingController, private router: Router, private dataService:DataService) { }

  ngOnInit() {
    this.locId = this.activatedRoute.snapshot.paramMap.get('locid');
    this.name = this.activatedRoute.snapshot.paramMap.get('name');
    this.presentLoading()
    this.subscription = this._estatesService.getEstates(this.locId)
    .subscribe({
      next: estates => {
          const tmpstates: IEstate[] = estates;
          this.result=_.chain(tmpstates).groupBy("region")
          .toPairs()
          .map(function(currentData){
            return _.zipObject(["region", "estates"], currentData);
          })
          .value();
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
  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Loadind data'
    });
    await loading.present();
  }
  onDtClick(id:string, region:string){
    this.dataService.setEstId(id);
    this.dataService.setLocationId(this.locId);
    this.dataService.setLocationName(this.name);
    const tmpobject = _.find(this.result, ['region', region]);
    const item = _.find(<any>tmpobject["estates"], ['id', id]);
    this.dataService.setRefNumber(item.refNumber);
    this.dataService.setLatitude(item.latitude);
    this.dataService.setLongitude(item.longitude);
    this.dataService.setRegion(item.region);
    this.dataService.setIsDataFromStorage(false);
    this.router.navigate(['/estate-home']);
  }
}
