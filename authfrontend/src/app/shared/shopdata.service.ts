import { ShopData } from './shopdata.model';
import { ShoplistService } from './../shoplist/shoplist.service';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';


@Injectable()
export class ShopdataService {

  constructor(private http: Http, private shoplistService: ShoplistService) { }

  getShops(lat: number, long: number) {
    this.http.get('http://localhost:8080/shopes/' + lat + '/' + long + '/' + '20').
    subscribe(
      (response) => {
        console.log(response.json());
       const shopes: ShopData[] = response.json();
       this.shoplistService.setShopes(shopes);
      }
    );
  }
  setShopDetail(lat: number, long: number, address: string, name: string) {

   const shopData: ShopData = {
      'name' : name ,
      'address' : address,
      'latitude' : lat,
      'longitude' : long
   };
   console.log(shopData);
    this.http.post('http://localhost:8080/store', shopData).subscribe(
      (res) => {
          console.log(res);
      }
    ) ;

  }

}
