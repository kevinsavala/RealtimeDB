import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tourlist',
  templateUrl: './tourlist.component.html',
  styleUrls: ['./tourlist.component.css']
})
export class TourlistComponent {
  @Input() tour: any;
  @Output() reserve = new EventEmitter<any>();

constructor(private router: Router) {}

  reserveTours() {
    localStorage.setItem('reservedTours', JSON.stringify(this.tour));
    this.reserve.emit(this.tour);
    this.router.navigate(['reserva']);
    /* this.router.navigate(['app-home']); */
  }
}
