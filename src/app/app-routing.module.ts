import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './core/login/login.component';
import { AuthGuard } from './shared/auth.guard';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    data: { state: 'login' }
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
    data: { state: 'login' }
  },
  {
    path: 'logout',
    redirectTo: 'login',
    pathMatch: 'full',
    data: { state: 'login' }
  },
  {
    path: 'home',
    loadChildren: './core/home/home.module#HomeModule',
    canActivate: [AuthGuard],
    data: { state: 'home' }
  },
  {
    path: 'dashboard',
    loadChildren: './core/dashboard/dashboard.module#DashboardModule',
    canActivate: [AuthGuard],
    data: { state: 'dashboard' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
