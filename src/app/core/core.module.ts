import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardModule } from './dashboard/dashboard.module';
import { HomeModule } from './home/home.module';
import { LoginModule } from './login/login.module';

@NgModule({
  imports: [
    CommonModule,
    DashboardModule,
    HomeModule,
    LoginModule
  ],
  declarations: [],
  exports: [
    DashboardModule,
    HomeModule,
    LoginModule
  ]
})
export class CoreModule { }
