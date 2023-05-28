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
  loginForm = new FormGroup({
    email: new FormControl('',{validators: [Validators.required, Validators.email],nonNullable:true} ),
    passsword: new FormControl('', [Validators.required])
  });
  constructor(
    private authService: AunthenticationService,
    ){}

  ngOnInit(): void{
    this.loginForm.reset();
  }

  get password(){
    return this.loginForm.get('password');
  }

  submit(){
    if(this.loginForm.valid){
      return;
    }
    const email = this.loginForm.value;
    const password = this.loginForm.value;

    //this.authService.login(email, password);
  }
}
