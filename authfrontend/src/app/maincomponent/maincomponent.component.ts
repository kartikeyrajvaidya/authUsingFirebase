import { AuthService } from './../auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-maincomponent',
  templateUrl: './maincomponent.component.html',
  styleUrls: ['./maincomponent.component.css']
})
export class MaincomponentComponent implements OnInit {

  constructor(private http: Http, private authService: AuthService) { }

  ngOnInit() {
  }
  onCheckOut() {
    const token = this.authService.getToken();
  }

}
