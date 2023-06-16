import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PrivateDashboardComponent } from './components/private-dashboard/private-dashboard.component';
import { AuthGuard } from './services/auth.guard';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { RoleGuard } from './services/role.guard';

const routes: Routes = [
  {
    path:'login',
    component: LoginComponent
  },
  {
    path: 'private-dashboard',
    component: PrivateDashboardComponent,
    canActivate: [AuthGuard,RoleGuard]
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
