import { ShopData } from './../shared/shopdata.model';
import { ShoplistService } from './shoplist.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-shoplist',
  templateUrl: './shoplist.component.html',
  styleUrls: ['./shoplist.component.css']
})
export class ShoplistComponent implements OnInit, OnDestroy {

  constructor(private shoplistService: ShoplistService) { }

  shopes: ShopData[];
  subscription: Subscription;
  ngOnInit() {
    this.subscription = this.shoplistService.shopesChanged
    .subscribe(
      (shopes: ShopData[]) => {
        this.shopes = shopes;
      }
    );
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
