import { Product } from './../shared/product.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ProductlistService {

  productChanged = new Subject<Product[]>();
  constructor() { }

  products: Product[] ;

 getProducts() {
   return this.products.slice();
 }
 setProducts(produts: Product[]) {
  console.log('Inside SetProduct');
   this.products = produts ;
   this.productChanged.next(this.products.slice());
 }

}
