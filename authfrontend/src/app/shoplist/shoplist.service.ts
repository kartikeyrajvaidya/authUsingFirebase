import { ShopData } from './../shared/shopdata.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ShoplistService {

  shopes: ShopData[] ;
  constructor() { }

  shopesChanged = new Subject<ShopData[]>();

  setShopes(shopes: ShopData[]) {
    this.shopes = shopes;
    this.shopesChanged.next(this.shopes.slice());
  }

  getShopes() {
    return this.shopes.slice();
  }

}
