import { Component, OnInit } from '@angular/core';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator';
import { DataService } from 'src/app/shared/data.service';
@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {
  public lat;
  public location: Location
  constructor(private data:DataService) { }

  ngOnInit() {
    const lat = this.data.getLatitude();
    const lng = this.data.getLongitude();
    this.location = {
      latitude: parseFloat(lat),
      longitude: parseFloat(lng),
      mapType: "roadmap",
      zoom: 16,
      marker: {
          lat: parseFloat(lat),
          lng: parseFloat(lng)
      }
    }
  }
  navigate(){
    alert("map");
    LaunchNavigator.navigate([this.location.latitude, this.location.longitude]);
  }
}

interface Marker {
  lat: number;
  lng: number;
}

interface Location {
  latitude: number;
  longitude: number;
  mapType: string;
  zoom: number;
  marker: Marker;
}