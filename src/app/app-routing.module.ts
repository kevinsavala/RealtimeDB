import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component'
import { SignupComponent } from './signup/signup.component'
import { HomeComponent } from './home/home.component';
import { ReservarComponent } from './reservar/reservar.component';
import { UsersComponent } from './users/users.component';
import { TourlistComponent } from './tourlist/tourlist.component';
import { LoginPhoneComponent } from './login-phone/login-phone.component';

const routes: Routes = [
  {path: '', redirectTo: '/inicio', pathMatch: 'full'},
  {path: 'inicio', component : HomeComponent},
  {path: 'login', component : LoginComponent},
  {path: 'signup', component : SignupComponent},
  {path: 'reservar', component : ReservarComponent},
  {path: 'userview', component: UsersComponent},
  {path: "tourlist", component: TourlistComponent},
  {path: "loginPhone", component: LoginPhoneComponent}
];

@NgModule({
  imports: [
    CommonModule, RouterModule.forRoot(routes)], exports: [RouterModule]
})
export class AppRoutingModule { }
