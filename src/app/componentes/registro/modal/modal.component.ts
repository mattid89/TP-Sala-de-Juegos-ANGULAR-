import { Component, OnInit, Inject } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  submitted: boolean = false;
  data: {email: string, clave: string};
 
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
