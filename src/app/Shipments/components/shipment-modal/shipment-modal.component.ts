import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Shipment } from '../../Interfaces/shipment.interface';
import { SnackBarMessage } from '../../Interfaces/snackBarMessage.interface';
import { SnackBarComponent } from '../snack-bar/snack-bar.component';

@Component({
  selector: 'app-create-shipment',
  templateUrl: './shipment-modal.component.html',
  styleUrls: ['./shipment-modal.component.css']
})
export class ShipmentModalComponent implements OnInit {

  durationInSeconds = 3;
  shipmentForm: any;
  isNew: boolean = true;
  /*shipmentForm: FormGroup = this.fb.group({
    date: [null, [Validators.required] ],  //value, validators Sincronos, validators Asincronos
    address: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)] ],
    weight: [0, [Validators.required, Validators.min(1), Validators.max(50)]],
    length: [0, [Validators.required, Validators.min(1), Validators.max(20)]],
    width: [0, [Validators.required, Validators.min(1), Validators.max(20)]],
    height: [0, [Validators.required, Validators.min(1), Validators.max(20)]],
  })*/
  
  constructor(
    private dialogRef: MatDialogRef<ShipmentModalComponent>,
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: Shipment | undefined) { 
      if (data) {
          this.isNew = false;
          this.shipmentForm = this.fb.group({
          date: [data.created_at, [Validators.required] ],  //value, validators Sincronos, validators Asincronos
          address: [data.details.address, [Validators.required, Validators.minLength(3), Validators.maxLength(20)] ],
          weight: [data.details.weight, [Validators.required, Validators.min(1), Validators.max(50)]],
          length: [data.details.length, [Validators.required, Validators.min(1), Validators.max(20)]],
          width: [data.details.width, [Validators.required, Validators.min(1), Validators.max(20)]],
          height: [data.details.height, [Validators.required, Validators.min(1), Validators.max(20)]],
        });
      } else {
        this.isNew = true;
        this.shipmentForm = this.fb.group({
          date: [null, [Validators.required] ],  //value, validators Sincronos, validators Asincronos
          address: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)] ],
          weight: [0, [Validators.required, Validators.min(1), Validators.max(50)]],
          length: [0, [Validators.required, Validators.min(1), Validators.max(20)]],
          width: [0, [Validators.required, Validators.min(1), Validators.max(20)]],
          height: [0, [Validators.required, Validators.min(1), Validators.max(20)]],
        })
      }
  }

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

  cancel(): void {
    this.dialogRef.close();
  }

  save(): void {
    if (this.shipmentForm.invalid) {
      this.openSnackBar({message: 'Please validate all fields.', icon: 'error'});
      return;
    }
    //TODO: Delete id because is going to be generated by DB
    const shipment: Shipment = {
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
    this.dialogRef.close(shipment);
  }
}
