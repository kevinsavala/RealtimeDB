import { Component } from '@angular/core';
import { AunthenticationService } from '../services/aunthentication.service';

@Component({
  selector: 'app-navbarlogin',
  templateUrl: './navbarlogin.component.html',
  styleUrls: ['./navbarlogin.component.css']
})
export class NavbarloginComponent {
  constructor(public auth : AunthenticationService){

  }
}
