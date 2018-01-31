import { ProductlistService } from './productlist/productlist.service';
import { ProductDataService } from './shared/product-data.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProductdescComponent } from './productlist/productdesc/productdesc.component';
import { SingupComponent } from './auth/singup/singup.component';
import { LoginComponent } from './auth/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductlistComponent,
    ProductdescComponent,
    SingupComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [ProductDataService, ProductlistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
