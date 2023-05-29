import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Realtime Database';
  constructor(private router : Router){}
  checkLogin(){
    if(localStorage.getItem("token") === null){
      return false;
    } else {
      return true;
    }
  }
  public ngOnInit(): void {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
}

}
