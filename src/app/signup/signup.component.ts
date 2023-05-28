import { Component } from '@angular/core';
import { getDatabase, set, ref, update } from '@angular/fire/database';
import { Database } from '@angular/fire/database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  // Initialize Firebase

  constructor(public database: Database, private router: Router){

  }
  
 goToPage(pageName:string){
    this.router.navigate([`${pageName}`]);
  }

  registerUser(value: any){
    set(ref(this.database, 'users/' + value.username), {
      username: value.username,
      firstname: value.firstname,
      lastname: value.lastname,
      email: value.email,
      password: value.password
      
    });
    alert("usuario creado");
    this.goToPage("inicio");
    /* <button (click)="router.navigate(['/master']);">
     <span>Go to master Page</span>
     </button>*/
     
  }
}

