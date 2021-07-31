import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../services/login.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate 
{
  constructor(private router: Router, private _service : LoginService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) 
  {
    if (this._service.isUserLoggedIn() && this._service.userType() === 'user' || this._service.userType() === 'USER') 
    {
      return true;
    }
    this.router.navigate(['login']);
    return false;
  }
  
}
