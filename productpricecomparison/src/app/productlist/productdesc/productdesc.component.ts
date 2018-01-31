import { Product } from './../../shared/product.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-productdesc',
  templateUrl: './productdesc.component.html',
  styleUrls: ['./productdesc.component.css']
})
export class ProductdescComponent implements OnInit {

  constructor() { }

  @Input() product: Product;

  ngOnInit() {
  }

}
