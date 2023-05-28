import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AunthenticationService {

  constructor(private auth: Auth) { }

  login(username:string, password: string){
    //this.authService.signInWithEmailAndPassword()12
  }

  logout(){
    return from(this.auth.signOut());
  }

}
