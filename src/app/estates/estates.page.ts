import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Router} from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { IEstate } from "./estate";
import { EstatesService } from "./estates.service";
import * as _ from 'lodash';
@Component({
  selector: 'app-estates',
  templateUrl: './estates.page.html',
  styleUrls: ['./estates.page.scss'],
})
export class EstatesPage implements OnInit, OnDestroy {
  private locId:string = "";
  private subscription;
  public errorMessage: string;
  public result: _.Dictionary<string | IEstate[]>[];
  constructor(private _estatesService: EstatesService, private activatedRoute: ActivatedRoute, public loadingController: LoadingController) { }

  ngOnInit() {
    this.locId = this.activatedRoute.snapshot.paramMap.get('locid');
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
}
