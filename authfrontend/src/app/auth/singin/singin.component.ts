import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.css']
})
export class SinginComponent implements OnInit {

  constructor(private authService: AuthService) { }

    ngOnInit() {
    }
    onSingIn(form: NgForm) {
      const username = form.value.username;
      const password = form.value.password;
      this.authService.singIn(username, password);
    }
}
