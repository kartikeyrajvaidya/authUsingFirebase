import { GooglemapsService } from './../shared/googlemaps.service';
import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-maincomponent',
  templateUrl: './maincomponent.component.html',
  styleUrls: ['./maincomponent.component.css']
})
export class MaincomponentComponent implements OnInit {

  constructor(private http: Http, private googlemapsService: GooglemapsService) { }

 geolocationPosition: Position;
  ngOnInit() {
    let count = 0;
    let zipcode = 0;
    if (window.navigator && window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition(
          (position) => {
              this.geolocationPosition = position;
                  const pos = position['coords'];
                  const lat = pos['latitude'];
                  const long = pos['longitude'];
                  this.googlemapsService.getCurrentPinCode(lat, long).subscribe(
                  (response) => {
                   const res = response.json();
                   const results = res['results'];
                   for (let i = 0; i < results.length; i++) {
                    for (let j = 0 ; j < results[i].address_components.length; j++) {
                        for (let k = 0; k < results[i].address_components[j].types.length; k++) {
                            if (results[i].address_components[j].types[k] === 'postal_code' && count === 0) {
                                 zipcode = results[i].address_components[j].short_name;
                                count ++;
                            }
                        }
                    }
                  }
                  console.log(zipcode);
                }
              );
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
