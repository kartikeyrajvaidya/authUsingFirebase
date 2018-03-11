import { ShopData } from './../../shared/shopdata.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-shopdesc',
  templateUrl: './shopdesc.component.html',
  styleUrls: ['./shopdesc.component.css']
})
export class ShopdescComponent implements OnInit {

  constructor() { }
  @Input() shop: ShopData;

  ngOnInit() {
  }

}
