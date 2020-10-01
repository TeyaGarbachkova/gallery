import { Component, OnInit } from '@angular/core';
//import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  users: any;
  constructor(private auth: AuthService, private route: Router, private apiService: ApiService) {
    this.users = [];
  }

  ngOnInit() {
  }

  loginHandler(loginForm) {
    this.apiService.getUsers().subscribe(users => {
      this.users = users;
      console.log(this.users)

      for (let user of this.users) {
        if(user.email == loginForm.value.email && user.password == loginForm.value.password) {
          console.log(1111)
          if(loginForm.valid) {
            //this.auth.sendToken(loginForm.value.email);
            this.auth.sendToken(user.id);
            console.log(user.id)
            console.log(user.email)
            console.log(user.password)
            //this.route.navigate(['profile']);
            this.route.navigate([{outlets: {primary: ['profile'], sidebar: ['sidebar-profile']}}]);
          }
        }
      }
    })
  }
}
