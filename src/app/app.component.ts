import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'auth-app';
  isAdmin = false;
  isLogin : any;
  constructor(
    private router: Router,
    private service: AuthService
  ) { }

  ngOnInit(): void {
    this.isLogin = this.service.loggedIn$;
    this.service.isAdmin$.subscribe((isAdmin)=>{
      this.isAdmin = isAdmin;
    })
  }
  logout(){
    this.service.logout();
  }
}
