import { Component } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms'
import { AunthenticationService } from '../services/aunthentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  email : string = '';
  password : string = '';

  constructor(private auth : AunthenticationService){}



  
  login() {

    if(this.email == '') {
      alert('Please enter email');
      return;
    }

    if(this.password == '') {
      alert('Please enter password');
      return;
    }

    this.auth.login(this.email,this.password);
    this.email = '';
    this.password = '';

  }

  
}
