import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component'
import { SignupComponent } from './signup/signup.component'
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: 'inicio', component : HomeComponent},
  {path: 'login', component : LoginComponent},
  {path: 'signup', component : SignupComponent},
  {path: 'reservar', component : SignupComponent},
  {path: '', redirectTo: '/inicio', pathMatch: 'full'},
  {path: '**', redirectTo: '/inicio'}
];

@NgModule({
  imports: [
    CommonModule, RouterModule.forRoot(routes)], exports: [RouterModule]
})
export class AppRoutingModule { }
