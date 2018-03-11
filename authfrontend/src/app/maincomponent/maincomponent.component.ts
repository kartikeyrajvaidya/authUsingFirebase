import { ShopdataService } from './../shared/shopdata.service';
import { GooglemapsService } from './../shared/googlemaps.service';
import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-maincomponent',
  templateUrl: './maincomponent.component.html',
  styleUrls: ['./maincomponent.component.css']
})
export class MaincomponentComponent implements OnInit {

  constructor(private http: Http, private googlemapsService: GooglemapsService, private shopdataService: ShopdataService) { }

 geolocationPosition: Position;
  ngOnInit() {
    if (window.navigator && window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition(
          (position) => {
              this.geolocationPosition = position;
                  const pos = position['coords'];
                  const lat = pos['latitude'];
                  const long = pos['longitude'];
                  console.log(lat + '++++' + long);
                  this.shopdataService.getShops(lat, long);
          },
          (error) => {
              switch (error.code) {
                  case 1:
                      console.log('Permission Denied');
                      break;
                  case 2:
                      console.log('Position Unavailable');
                      break;
                  case 3:
                      console.log('Timeout');
                      break;
              }
          }
      );
    }
  }
}
