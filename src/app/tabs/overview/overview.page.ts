import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from 'src/app/shared/data.service';
import { EstatehomeService } from 'src/app/shared/estatehome.service';
import { LoadingController, AlertController, ToastController } from '@ionic/angular';
import { IEstate } from "../../shared/estate";
import { ISavedEstate } from "../../shared/savedestate";
import {Events} from "@ionic/angular"
import { Storage } from '@ionic/storage';
import * as _ from 'lodash';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.page.html',
  styleUrls: ['./overview.page.scss'],
})
export class OverviewPage implements OnInit, OnDestroy {
  private subscription;
  private locId: string = "";
  private locName: string = "";
  private estId: string = "";
  private savedEstates:ISavedEstate[] = [];
  public errorMessage: string;
  public estate: IEstate = {
    id: "",
    refNumber: "",
    region: "",
    type: "",
    bedrooms: 0,
    area: 0,
    price: 0,
    image: "",
    address: "",
    latitude: "",
    longitude: "",
  };
  public buttonTitle = "SAVE TO MY ESTATES"
  constructor(private dataService:DataService, public loadingController:LoadingController, private _estatehomeService: EstatehomeService, private alertController: AlertController, private toastController: ToastController,private storage: Storage, public events: Events) { }
  ngOnInit(){}
  ionViewWillEnter() {
    this.locId = this.dataService.getLocationId();
    this.estId = this.dataService.getEstId();
    this.locName = this.dataService.getLocationName();
    this.subscription = this._estatehomeService.getEstates(this.locId)
    .subscribe({
      next: _estates => {
        
          let result =  _.find(_estates, ['id', this.estId]);
          this.estate = result;
          this.getSavedEstates();
      },
      error: error => this.errorMessage = <any>error
    });
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
  onButtonClick(){
    if(this.buttonTitle == "REMOVE FROM SAVED ESTATES"){
        this.presentAlertConfirm();
    }else {
      this.buttonTitle = "REMOVE FROM SAVED ESTATES";
      this.saveEstate();
    }
    
  }
  getSavedEstates(){
    this.storage.get('savedEstates').then((val) => {
      if(val != null){
        this.savedEstates = JSON.parse(val);
        if(this.savedEstates.length >0){
          let result =  _.find(this.savedEstates, ['id', this.estate.id]);
          if((result != undefined)&&(result != null)){
            this.buttonTitle = "REMOVE FROM SAVED ESTATES";
          }
        }
      }
    });
  }
  saveEstate(){
    let newSavedEstate:ISavedEstate = {
      id: this.estate.id,
      refNumber: this.estate.refNumber,
      region: this.estate.region,
      type: this.estate.type,
      bedrooms: this.estate.bedrooms,
      area: this.estate.area,
      price: this.estate.price,
      image: this.estate.image,
      address: this.estate.address,
      latitude: this.estate.latitude,
      longitude: this.estate.longitude,
      locationName: this.locName,
      locationId: this.locId
    }
    this.savedEstates.push(newSavedEstate);
    this.storage.set('savedEstates', JSON.stringify(this.savedEstates));
    this.events.publish("savedEstatesChanged", this.savedEstates);
  }

  async presentAlertConfirm() {
    const alertMss = await this.alertController.create({
      header: 'Confirm',
      message: 'Are you sure you want to remove from saved estates?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Yes',
          handler: () => {
            _.remove(this.savedEstates, {
              "id": this.estate.id
            });
            this.storage.set('savedEstates', JSON.stringify(this.savedEstates));
            this.presentToast("Estate removed");
            this.buttonTitle = "SAVE TO MY ESTATES";
            this.events.publish("savedEstatesChanged", this.savedEstates);
          }
        }
      ]
    });

    await alertMss.present();
  }

  async presentToast(text) {
    const toast = await this.toastController.create({
      message: text,
      duration: 2000
    });
    toast.present();
  }

  refreshEstate(args){
    this.subscription.unsubscribe();
    this.subscription = this._estatehomeService.getEstates(this.locId)
    .subscribe({
      next: _estates => {
        
          let result =  _.find(_estates, ['id', this.estId]);
          this.estate = result;
          this.getSavedEstates();
          setTimeout(() => {
            args.target.complete();
          }, 2000);
      },
      error: error => this.errorMessage = <any>error
    });
    
  }
  
}
