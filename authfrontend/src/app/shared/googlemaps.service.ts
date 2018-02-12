import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class GooglemapsService {

  constructor(private http: Http) { }
  geolocationPosition: Position;
  getCurrentPinCode(lat, long) {
    // tslint:disable-next-line:max-line-length
    return this.http.get('https://maps.googleapis.com/maps/api/geocode/json?latlng=' + lat + ',' + long + '&key=AIzaSyCoJzj6DXv33mHqDRcw1YBzTMr2E36HI3U')
  }
}
