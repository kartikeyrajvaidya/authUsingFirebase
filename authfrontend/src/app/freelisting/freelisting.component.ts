import { Router } from '@angular/router';
import { NgForm, FormControl } from '@angular/forms';
import { TokenModel } from '../shared/token.model';
import { AuthService } from './../auth/auth.service';
import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { Http } from '@angular/http';
import { } from 'googlemaps';
import {MapsAPILoader} from '@agm/core' ;


@Component({
  selector: 'app-freelisting',
  templateUrl: './freelisting.component.html',
  styleUrls: ['./freelisting.component.css']
})
export class FreelistingComponent implements OnInit {

   public latitude: number;
   public longitude: number;
   public searchControl: FormControl;
   public zoom: number;


   @ViewChild('search') public searchElement: ElementRef;


    private baseUrl = 'http://localhost:8080';
    constructor(private http: Http, private authService: AuthService, private route: Router, private mapsAPILoader: MapsAPILoader,
      private ngZone: NgZone) { }
    tokenModel: TokenModel ;

    ngOnInit() {
      this.mapsAPILoader.load().then(
        () => {
                const autocomplete = new google.maps.places.Autocomplete(this.searchElement.nativeElement,
                { types: [] });
                autocomplete.addListener('place_changed', () => {
                  this.ngZone.run(() => {
                    const place: google.maps.places.PlaceResult = autocomplete.getPlace();
                    if (place.geometry === undefined || place.geometry === null ) {
                      return;
                    }
                  });
                });
              }
      ).catch(
       () => {
         console.log('dsxfgvbhjnk');
        }
      );
    }

    onSubmit(form: NgForm) {
      this.tokenModel = {
        tokenId : this.authService.getToken()
      };
      const geocoder = new google.maps.Geocoder();
      const name = form.value.name;
      const building = form.value.building;
      const street = form.value.street;
      const landmark = form.value.landmark;
      const area = form.value.area;
      const city = form.value.city;
      const pincode = form.value.pincode;
      const state = form.value.state;
      const country = form.value.country;

      // geocoder.geocode( country , function(results, status) {
      //   if (status === 'OK') {
      //     console.log(results + 'Hello');
      //   }else {
      //     console.log('Hello');
      //   }
      // });
      this.http.post( this.baseUrl + '/api/verify' , this.tokenModel)
      .subscribe(
        (response) => {
           // tslint:disable-next-line:max-line-length
          this.http.get('https://maps.googleapis.com/maps/api/geocode/json?address=' + name + ',' + building + ',' + street + ',' + landmark + ',' + area + ',' + city + ',' + pincode + ',' + state + ',' + country + '&key=AIzaSyBtSsA3S8ub07mGwUIOHzIdtJzgT8hDJ78')
          .subscribe(
              (response1) => {
                const result = response1.json();
                console.log(result);
                if (result.length === 0) {
                  // tslint:disable-next-line:max-line-length
                  this.http.get('https://maps.googleapis.com/maps/api/geocode/json?address=' + building + ',' + area + ',' + city + ',' + pincode + ',' + state + ',' + country + '&key=AIzaSyBtSsA3S8ub07mGwUIOHzIdtJzgT8hDJ78')
                  .subscribe(
                    () => {
                    }
                  );
                }
              }
          );
        },
        (error) => {
          this.route.navigate(['/singin']);
        }
      );
    }

}
