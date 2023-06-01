import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { GoogleAuthProvider, GithubAuthProvider, FacebookAuthProvider, ApplicationVerifier, RecaptchaVerifier} from '@angular/fire/auth'
import { signInWithPhoneNumber } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AunthenticationService {

  constructor(public fireauth: AngularFireAuth, private router : Router) { }

  //login
  login(email: string, password: string){
    this.fireauth.signInWithEmailAndPassword(email,password).then( ()=> {
        localStorage.setItem('token', 'true');
        this.router.navigate(['/reservar']);
    },err =>{
        alert("Something went wrong");
        this.router.navigate(['/login']);
    } )
  }

  register(email : string, password : string) {
    this.fireauth.createUserWithEmailAndPassword(email, password).then( res => {
      alert('Registration Successful');
      this.router.navigate(['/login']);
    }, err => {
      alert(err.message);
      this.router.navigate(['/register']);
    })
  }
  loginPhone(phone: string, captcha: RecaptchaVerifier){

    this.fireauth.signInWithPhoneNumber(phone, captcha).then(result => {
      this.router.navigate(['/verify'])
    }).catch(error => console.log(error));
  }
  logout() {
    this.fireauth.signOut().then( () => {
      localStorage.removeItem('token');
      this.router.navigate(['/login']);
    }, err => {
      alert(err.message);
    })
  }


  
}
