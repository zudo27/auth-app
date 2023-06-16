import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, map, take } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  constructor(
    private router: Router,
    private service: AuthService
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): any {
      let userDetail = JSON.parse(localStorage.getItem('userDetail')!);
      if(userDetail.email === 'task@gmail.com' && userDetail.password === '12345678') {
        return true;
      } else {
        this.router.navigate(['/home']);
      }
  }
  
}
