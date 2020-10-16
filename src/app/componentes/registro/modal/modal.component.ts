import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { RegistroData } from 'src/app/clases/registro.data.model';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  submitted: boolean = false;
  data: RegistroData;
 
  registerForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")
    ]),
    clave1: new FormControl('', Validators.required),
    clave2: new FormControl('', Validators.required)
  }, { validators: samePasswordValidator});



  constructor(
    public dialogRef: MatDialogRef<ModalComponent>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

  onSubmit() {
    if (this.registerForm.invalid) {
      return;
    }
    this.dialogRef.close(this.registerForm.value);
  }

}


const samePasswordValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
  const clave1 = control.get('clave1');
  const clave2 = control.get('clave2');

  return clave1.value !== clave2.value ? { isNotSimilar: true } : null;
};