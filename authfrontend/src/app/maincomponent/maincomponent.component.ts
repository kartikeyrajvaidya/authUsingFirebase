import { TokenModel } from './maincomponent.model';
import { AuthService } from './../auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-maincomponent',
  templateUrl: './maincomponent.component.html',
  styleUrls: ['./maincomponent.component.css']
})
export class MaincomponentComponent implements OnInit {

  private baseUrl = 'http://localhost:8080';
  constructor(private http: Http, private authService: AuthService) { }
  tokenModel: TokenModel ;
  ngOnInit() {
  }
  onCheckOut() {
    this.tokenModel = {
      tokenId : this.authService.getToken()
    };
    this.http.post( this.baseUrl + '/api/verify' , this.tokenModel)
    .subscribe(
      (response) => {
        console.log(response.json());
      }
    );
  }

}
