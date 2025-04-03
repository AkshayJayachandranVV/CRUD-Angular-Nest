import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [

    {path:"login",component:LoginComponent},
    {path:'signup',component:SignupComponent},
    {path:'home',component:HomeComponent}
];


