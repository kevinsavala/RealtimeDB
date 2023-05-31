import { Component } from '@angular/core';
import { getDatabase, set, ref, update } from '@angular/fire/database';
import { Database } from '@angular/fire/database';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';
import { AunthenticationService } from '../services/aunthentication.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  // Initialize Firebase
  email : string = '';
  password : string = '';
  phone : string = '';
  constructor(public database: Database, private router: Router, private auth : AunthenticationService){

  }
  
 goToPage(pageName:string){
    this.router.navigate([`${pageName}`]);
  }

  registerUser(value: any){
    if(this.email == '') {
      alert('Please enter email');
      return;
    }

    if(this.password == '') {
      alert('Please enter password');
      return;
    }

    if(this.phone == ''){
      alert('Please enter phone number');
      return;
    }
    set(ref(this.database, 'users/' + value.username), {
      username: value.username,
      firstname: value.firstname,
      lastname: value.lastname,
      email: value.email,
      password: value.password,
      phone: value.phone
    });
    
    this.auth.register(this.email, this.password);

    alert("usuario creado");
    this.goToPage("inicio");
    /* <button (click)="router.navigate(['/master']);">
     <span>Go to master Page</span>
     </button>*/
     
  }
}

