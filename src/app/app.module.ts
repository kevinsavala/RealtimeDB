import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component'
import { AppRoutingModule } from './app-routing.module';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ReservarComponent } from './reservar/reservar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { NavbarloginComponent } from './navbarlogin/navbarlogin.component';
import { UsersComponent } from './users/users.component';
import { TourlistComponent } from './tourlist/tourlist.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    NavbarComponent,
    HomeComponent,
    ReservarComponent,
    NavbarloginComponent,
    UsersComponent,
    TourlistComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    RouterTestingModule,
    HttpClientModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideDatabase(() => getDatabase()), ReactiveFormsModule, provideAuth(() => getAuth()),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
