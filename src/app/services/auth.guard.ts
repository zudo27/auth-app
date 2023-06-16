import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, map, take } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private service : AuthService,
    private router: Router
  ){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<any> {
      return this.service.loggedIn$.pipe(
        take(1),
        map((loggedIn$: boolean) =>{
          let userDetail = JSON.parse(localStorage.getItem('userDetail')!);
          if(!loggedIn$) {
            this.router.navigate(['/login']);
            return false;
          } else {
            return true;
          }
        })
      )
  }
  
}
