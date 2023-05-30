import { Component } from '@angular/core';

@Component({
  selector: 'app-reservar',
  templateUrl: './reservar.component.html',
  styleUrls: ['./reservar.component.css']
})
export class ReservarComponent {
  item:any;
  title = 'reserva';
  reservations:any[]=[];
  alertMessage = '';
  alertType = '';
  reservedTours: any;
  tour: any;

  onSubmit() {
    // Obtener la fecha y hora ingresadas por el usuario
    const date = (<HTMLInputElement>document.getElementById('date')).value;
    const time = (<HTMLInputElement>document.getElementById('time')).value;

    // Obtener las reservaciones almacenadas en el localStorage
    const reservationsString = localStorage.getItem('reservations');
    const reservations = reservationsString ? JSON.parse(reservationsString) : [];
    // Verificar si la fecha y hora ya están ocupadas
    interface Reservation {
      date: string;
      time: string;
         tour: any;
    }
    
    // ...
    
    const isOccupied = reservations.some((reservation: Reservation) =>
      reservation.date === date && reservation.time === time
    );
    
    const currentDate = new Date();
    const reservationDate = new Date(date);
    
    if (!date || !time) {
      this.alertMessage = 'Por favor ingrese una fecha y hora para reservar.';
      this.alertType = 'warning';
    } else if (reservationDate < currentDate) {
      this.alertMessage = 'Lo siento, esa fecha ya pasó.';
      this.alertType = 'danger';
    } else if (isOccupied) {
      this.alertMessage = 'Lo siento, esa fecha y hora ya están ocupadas.';
      this.alertType = 'danger';
    } else {
      // Agregar la nueva reservación al localStorage
      reservations.push({ date, time });
      localStorage.setItem('reservations', JSON.stringify(reservations));
      this.alertMessage = 'Reservación realizada con éxito.';
      this.alertType = 'success';
    }
  }
  constructor(){
    const reservationsString = localStorage.getItem('reservations');
    this.reservations = reservationsString ? JSON.parse(reservationsString)
      : [];
      this.getReservedTours();
  }

  getReservedTours() {
    // Recuperar los datos del localStorage
    const storedTours = localStorage.getItem('reservedTours');
    if (storedTours) {
      // Convertir los datos a un objeto JavaScript
      this.reservedTours = JSON.parse(storedTours);
    }
  }

  tours = [
    {
      name: 'Tour a Seul Corea',
      price: 5000
    },
    {
      name: 'Tour Machu Picchu Peru',
      price: 4000
    },
    {
      name: 'Tour a Petra Jordania',
      price: 3500
    }
  ];
  
  onReserve(tour:any) {
    console.log('Tour reservado:', tour);
  }


}
