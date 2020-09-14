import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  //public loginPage;
  user;
  username;
  constructor(private auth: AuthService, private route: Router) { }

  ngOnInit() {
    this.user = JSON.parse(sessionStorage.getItem("LoggedInUser"));
    // if(this.user) {
    //   console.log(this.user);
    //   this.username = this.user.username;
    // } else {
    //   this.username = "";
    // }
  }
}
