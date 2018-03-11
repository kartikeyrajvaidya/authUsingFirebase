import { ShopData } from './../shared/shopdata.model';
import { ShopdataService } from './../shared/shopdata.service';
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
  styleUrls: ['./freelisting.component.css'],

})
export class FreelistingComponent implements OnInit {

   public latitude: number;
   public longitude: number;
   public searchControl: FormControl;
   public zoom: number;


   @ViewChild('search') public searchElement: ElementRef;


    private baseUrl = 'http://localhost:8080';
    constructor(private http: Http, private authService: AuthService, private route: Router, private mapsAPILoader: MapsAPILoader,
      private ngZone: NgZone, private shopdataService: ShopdataService) { }
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
      const name = form.value.name;
      const location: string = (<string>this.searchElement.nativeElement.value) ;
      this.http.post( this.baseUrl + '/api/verify' , this.tokenModel)
      .subscribe(
        (response) => {
          console.log(location);
           // tslint:disable-next-line:max-line-length
          this.http.get('https://maps.googleapis.com/maps/api/geocode/json?address=' + location + '&key=AIzaSyBtSsA3S8ub07mGwUIOHzIdtJzgT8hDJ78')
          .subscribe(
              (response1) => {
                const result = response1.json();
                console.log(result.results[0].geometry.location['lng']);
                this.shopdataService.setShopDetail(result.results[0].geometry.location['lat']
                , result.results[0].geometry.location['lng'], location , name);
              }
          );
        },
        (error) => {
          this.route.navigate(['/singin']);
        }
      );
    }
}
