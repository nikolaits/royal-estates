import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private locationId: string= "";
  private refNumber: string = ""
  private estId: string = "";
  private latitude: string = "";
  private longitude: string = "";
  private locationName: string = "";
  private region: string = "";
  private isDataFromStorage: boolean = false;
  constructor() { }
  setLocationId(locid: string){
    this.locationId = locid;
  }
  getLocationId(){
    return this.locationId;
  }
  setRefNumber(rnum: string){
    this.refNumber = rnum;
  }
  getRefNumber(){
    return this.refNumber;
  }
  setEstId(id: string){
    this.estId = id;
  }
  getEstId(){
    return this.estId;
  }
  setLatitude(lat: string){
    this.latitude = lat;
  }
  getLatitude(){
    return this.latitude;
  }

  setLongitude(lon: string){
    this.longitude = lon;
  }
  getLongitude(){
    return this.longitude;
  }

  setLocationName(name: string){
    this.locationName = name;
  }
  getLocationName(){
    return this.locationName;
  }

  setRegion(tmpregion: string){
    this.region = tmpregion;
  }
  getRegion(){
    return this.region;
  }
  setIsDataFromStorage(tmp: boolean){
    this.isDataFromStorage = tmp;
  }
  getIsDataFromStorage(){
    return this.isDataFromStorage;
  }
}
