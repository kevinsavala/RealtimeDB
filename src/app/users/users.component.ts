import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { getDatabase, ref, onValue } from 'firebase/database';
import { initializeApp } from "firebase/app";
import { environment } from 'src/environments/environment';

const app = initializeApp(environment.firebase);


const db = getDatabase();
const starCountRef = ref(db, 'users/');

let auxiliar : any;
var datos : any[] = [];
let tabla : HTMLElement = document.getElementById("tabla")!;
var body : HTMLElement = document.body;
console.log(body);

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
    constructor(){
    }
  public getData(){
    onValue(starCountRef, (snapshot) => {
      var data : any[];
      let tablaBody = document.createElement("tbody");

      data = Object.values(snapshot.val()); //se tiene el array con objetos 
      //console.log("data onValue: " + Object.values(data)); //se tiene el segundo objeto en forma de array
      

      //SE CREA LA TABLA DE USUARIOS
      const div = document.createElement('div');
      const tbl = document.createElement('table');
      var thead = document.createElement('thead');
      var orderArrayHeader = ["Correo", "Nombre", "Apellido", "Contraseña", "Usuario"];

            tbl.appendChild(thead);

            for (let i=0; i < 5; i++) {
                thead.appendChild(document.createElement("th")).appendChild(document.createTextNode(orderArrayHeader[i]));
            }


      for(let i=0; i<  data.length;i++){
        const row = tbl.insertRow();

        for(let j=0; j<5; j++){
          const cell = row.insertCell();
          //console.log("["+i+"]" + "["+j+"]: " + Object.values(data[i])[j]);
          let aux : any; 
          aux = Object.values(data[i])[j];
          
          
          cell.appendChild(document.createTextNode(aux));
          
          row.setAttribute("class", "celdas");
          row.appendChild(cell);

        }
      }
      tbl.setAttribute("class","tablee");
      div.setAttribute("class", "centerAll")
      div.appendChild(tbl);
      body?.appendChild(div);
    });
    
    //auxiliar = data;

    //console.log("AUXILIAR: " + auxiliar);
    //console.log("DATA: " + data[1]);
  }
  public getBody(){
    document.getElementById("tablas");
  }
}

