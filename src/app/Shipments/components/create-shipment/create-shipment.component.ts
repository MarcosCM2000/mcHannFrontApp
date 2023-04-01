import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

import { Shipment } from '../../Interfaces/shipment.interface';
import { shipmentDetail } from '../../Interfaces/shipmentDetail.interface';

@Component({
  selector: 'app-create-shipment',
  templateUrl: './create-shipment.component.html',
  styleUrls: ['./create-shipment.component.css']
})
export class CreateShipmentComponent implements OnInit {

  constructor(private fb: FormBuilder, private dialogRef: MatDialogRef<CreateShipmentComponent>) { }

  shipmentForm: FormGroup = this.fb.group({
    date: [null, [Validators.required] ],  //value, validators Sincronos, validators Asincronos
    address: ['', [Validators.required, Validators.minLength(3)] ],
    weight: [0, [Validators.required, Validators.min(0), Validators.max(50)]],
    length: [0, [Validators.required, Validators.min(0), Validators.max(20)]],
    width: [0, [Validators.required, Validators.min(0), Validators.max(20)]],
    height: [0, [Validators.required, Validators.min(0), Validators.max(20)]],
  })

  ngOnInit(): void {
  }

  save(): void {
    /*if (this.shipmentForm.invalid) {
      this.shipmentForm.markAllAsTouched();
      return;
    }*/
    const newShipment: Shipment = {
      created_at: this.shipmentForm.value.date,
      details: {
        address:  this.shipmentForm.value.address,
        weight:   this.shipmentForm.value.weight,
        length:   this.shipmentForm.value.length,
        width:    this.shipmentForm.value.width,
        height:   this.shipmentForm.value.height,
      }

    }
    this.dialogRef.close(newShipment);
  }
}
