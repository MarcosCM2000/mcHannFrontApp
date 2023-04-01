import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Shipment } from '../../Interfaces/shipment.interface';
import { SnackBarMessage } from '../../Interfaces/snackBarMessage.interface';
import { SnackBarComponent } from '../snack-bar/snack-bar.component';

@Component({
  selector: 'app-create-shipment',
  templateUrl: './create-shipment.component.html',
  styleUrls: ['./create-shipment.component.css']
})
export class CreateShipmentComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<CreateShipmentComponent>,
    private fb: FormBuilder,
    private snackBar: MatSnackBar) { }

  shipmentForm: FormGroup = this.fb.group({
    date: [null, [Validators.required] ],  //value, validators Sincronos, validators Asincronos
    address: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)] ],
    weight: [0, [Validators.required, Validators.min(1), Validators.max(50)]],
    length: [0, [Validators.required, Validators.min(1), Validators.max(20)]],
    width: [0, [Validators.required, Validators.min(1), Validators.max(20)]],
    height: [0, [Validators.required, Validators.min(1), Validators.max(20)]],
  })

  durationInSeconds = 3;

  ngOnInit(): void {
  }

  validateField(field: string){
    return this.shipmentForm.controls[field].errors && this.shipmentForm.controls[field].touched;
  }

  openSnackBar(data: SnackBarMessage) {
    this.snackBar.openFromComponent(SnackBarComponent, {
      duration: this.durationInSeconds * 1000,
      data
    });
  }

  save(): void {
    if (this.shipmentForm.invalid) {
      this.openSnackBar({message: 'Please validate all fields.', icon: 'error'});
      return;
    }
    const newShipment: Shipment = {
      id: Math.random(),
      created_at: this.shipmentForm.value.date,
      details: {
        address:  this.shipmentForm.value.address,
        weight:   this.shipmentForm.value.weight,
        length:   this.shipmentForm.value.length,
        width:    this.shipmentForm.value.width,
        height:   this.shipmentForm.value.height,
      }

    }
    this.shipmentForm.reset();
    this.dialogRef.close(newShipment);
  }
}
