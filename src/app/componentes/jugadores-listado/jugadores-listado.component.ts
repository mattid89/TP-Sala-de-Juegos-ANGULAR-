import { Component, OnInit } from '@angular/core';
import { JugadoresFirebaseService } from 'src/app/servicios/jugadores.firebase.service';
@Component({
  selector: 'app-jugadores-listado',
  templateUrl: './jugadores-listado.component.html',
  styleUrls: ['./jugadores-listado.component.css']
})
export class JugadoresListadoComponent implements OnInit {

  listado:any
  
  constructor(public serviceJugadores: JugadoresFirebaseService) { }
    

  ngOnInit() {
  }


  TraerTodos(){
    //alert("totos");
    this.serviceJugadores.getJugadores()
    .subscribe(
      res => {
        console.log(res);
        this.listado = res;
      },
      err => console.log
    );
  }


  // TraerGanadores(){
  //   this.serviceJugadores.traertodos('jugadores/','ganadores').then(data=>{
  //     //console.info("jugadores listado",(data));
  //     this.listado= data;

  //   })
  // }


  // TraerPerdedores(){
  //   this.serviceJugadores.traertodos('jugadores/','perdedores').then(data=>{
  //     //console.info("jugadores listado",(data));
  //     this.listado= data;

  //   })
  // }

}
