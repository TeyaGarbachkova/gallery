import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  constructor(private route: Router) {}

  sendToken(token: any) {
    sessionStorage.setItem("LoggedInUser", token)
  }

  getToken() {
    return sessionStorage.getItem("LoggedInUser");
  }
  
  public login() {
    //return !!localStorage.getItem('token');
    return this.getToken() !== null;
  }

  public logout() {
    console.log(111)
    sessionStorage.removeItem('LoggedInUser');
    // TODO: navigate to home page
    this.route.navigate([{outlets: 
      {primary: ['login'], sidebar: null}
    }]);
  }
}