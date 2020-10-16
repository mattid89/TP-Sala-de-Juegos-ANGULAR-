import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { RegistroData } from 'src/app/clases/registro.data.model';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Output() registrar = new EventEmitter<RegistroData>();
  submitted: boolean = false;
  data: RegistroData;
 
  registerForm = new FormGroup({
    email: new FormControl('', Validators.required),
    clave1: new FormControl('', Validators.required),
    clave2: new FormControl('', [Validators.required, this.samePasswordValidator])
  });



  constructor(
    public dialogRef: MatDialogRef<ModalComponent>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

  samePasswordValidator(c: AbstractControl): { invalid: boolean } {
      if (c.value.clave1 !== c.value.clave2) {
          return {invalid: true};
      }
  }

  onSubmit() {
    console.log('submit', this.registerForm);
  }

}
