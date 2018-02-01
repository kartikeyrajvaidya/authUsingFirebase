import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {

constructor(private authService: AuthService) { }
    ngOnInit() {
    }
    onSingUp(form: NgForm) {
      const username = form.value.username;
      const password = form.value.password;
      console.log(password + username);
      this.authService.singUp(username, password);
    }
}
