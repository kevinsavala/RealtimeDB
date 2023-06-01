import { Component } from '@angular/core';
import { AunthenticationService } from '../services/aunthentication.service';
import { firebaseApp$ } from '@angular/fire/app';

var recaptchaVerifier;

@Component({
  selector: 'app-login-phone',
  templateUrl: './login-phone.component.html',
  styleUrls: ['./login-phone.component.css']
})
export class LoginPhoneComponent {
  recaptchaVerifier : any;
  constructor(public auth: AunthenticationService){}


}
