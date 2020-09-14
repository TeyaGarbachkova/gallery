import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
  private router: Router,
  public auth: AuthService
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    //return true;// тук може да проверяваме дали потребителят е логнат или не
    if(this.auth.login()){
      return true;
    } else {
      this.router.navigate(['login', { outlets: { sidebar: null } }]);
      return false;
    }
  }
}
  
  
