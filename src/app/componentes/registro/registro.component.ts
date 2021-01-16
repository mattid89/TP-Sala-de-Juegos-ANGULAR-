import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from './modal/modal.component';
import { JugadoresFirebaseService } from 'src/app/servicios/jugadores.firebase.service';
import { FirebaseService } from 'src/app/servicios/firebase.service';
//para poder hacer las validaciones
//import { Validators, FormBuilder, FormControl, FormGroup} from '@angular/forms';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(
    public dialog: MatDialog, 
    private jugadoresFirebaseService: JugadoresFirebaseService,
    public firebaseService: FirebaseService) { }

  ngOnInit() {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '400px'
      // ,data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      // TODO: hacer el login en firebase, registrar el usuario
      // una vez registrado el usuario para login guardar los datos del usuario en una base jugadores en firebase
    });
  }

}
