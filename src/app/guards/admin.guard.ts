import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../services/login.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate 
{
  constructor(private _router : Router, private _service : LoginService) {}
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) 
  {
    if (this._service.isUserLoggedIn() && this._service.userType() === 'admin' || this._service.userType() === 'ADMIN') 
    {
      return true;
    }
    this._router.navigate(['login']);
    return false;
  }
  
}
