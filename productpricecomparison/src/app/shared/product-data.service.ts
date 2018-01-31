import { ProductlistService } from './../productlist/productlist.service';
import { Product } from './product.model';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ProductDataService {

  constructor(private http: Http, private productlistService: ProductlistService) { }

  getProduct(name: string) {
    console.log('getRequest');
    this.http.get('https://price-api.datayuge.com/api/v1/compare/search?product=' + name
    + '&api_key=F2LlBTOApk0KLp3ZDOCUmSNQ1zLSIgAHBJD')
    .subscribe(
      (response) => {
        console.log('GotResponse');
        const products: Product[] = response.json();
        console.log(products['data']);
        this.productlistService.setProducts(products['data']);
      }
    );
  }

}
