import { Component } from '@angular/core';
import { AunthenticationService } from '../services/aunthentication.service';
import { firebaseApp$ } from '@angular/fire/app';
import { RecaptchaVerifier } from 'firebase/auth';
import { WindowService } from '../services/window.service';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { Observable } from 'rxjs';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Router } from '@angular/router';
var verifyer : RecaptchaVerifier;


@Component({
  selector: 'app-login-phone',
  templateUrl: './login-phone.component.html',
  styleUrls: ['./login-phone.component.css']
})
export class LoginPhoneComponent {
  recaptchaVerifier : any;
  number : string = '';
  windowRef: any;
  verificationCode: string | undefined;
  constructor(public auth: AunthenticationService, private win: WindowService, private router : Router){}
  
  login() {
    var appVerifier = this.windowRef.recaptchaVerifier;
    if(this.number == '') {
      alert('Please enter number');
      return;
    }

    //this.auth.loginPhone(this.number,this.password);
    firebase.auth().signInWithPhoneNumber(this.number, appVerifier).then(result => {
      this.windowRef.confirmationResult = result;
      localStorage.setItem("confirmationResult", JSON.stringify(result));
      console.log("Se supone que se envio el mensaje")
    }). catch(error => console.log("ERROR: "+error));
    this.number = '';

  }

  ngOnInit(){
    if(localStorage.getItem("confirmationResult")){
      this.windowRef = JSON.parse(localStorage.getItem("confirmationResult")!);
    } else{
      this.windowRef = this.win.windowRef;
    }

    
    this.windowRef.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
      'size': 'visible',
      'callback': function (response: any) {
        console.log(response);
      }
    });
    
    this.windowRef.recaptchaVerifier.render();
  }
  verifyLoginCode() {
    this.windowRef.confirmationResult
      .confirm(this.verificationCode)
      .then((result: { user: any; }) => {
        localStorage.setItem('token', 'true');
        this.router.navigate(['/reservar']);
      })
      .catch((error: any) => console.log(error, "Código erroneo?"))
  }

}
