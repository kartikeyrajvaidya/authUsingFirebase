import { Product } from './../shared/product.model';
import { ProductlistService } from './productlist.service';
import { ProductDataService } from './../shared/product-data.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms' ;
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit, OnDestroy {

  constructor(private productDataService: ProductDataService, private productlistService: ProductlistService) { }
  subscription: Subscription;
  name: string;

  products: Product[] ;


  ngOnInit() {

    this.subscription = this.productlistService.productChanged
    .subscribe(
      (products: Product[]) => {
        this.products = products;
      }
    );

  }


  onSubmit(form: NgForm) {
    console.log('ButtonClicked');
    this.name = form.value.name ;
    this.productDataService.getProduct(this.name);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
