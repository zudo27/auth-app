import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isloggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public loggedIn$ = this.isloggedIn.asObservable();
  public isAdmin: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public isAdmin$ = this.isAdmin.asObservable();
  public loginDetail: any;

  constructor(
    private router: Router
  ) { }
  login(loginDetail:any){
    this.loginDetail = loginDetail;
    console.log(loginDetail)
    if(loginDetail.email !== '' && loginDetail.password !== '') {
      this.isloggedIn.next(true);
      localStorage.setItem('userDetail', JSON.stringify(loginDetail));
      this.router.navigate(['/home']);
    }
    if(loginDetail.email === 'task@gmail.com' && loginDetail.password === '12345678') {
      this.isAdmin.next(true);
    } else {
      this.isAdmin.next(false);
    }
  }

  logout() {
    localStorage.removeItem('userDetail');
    this.isloggedIn.next(false);
    this.router.navigate(['/login']);
  }
}
