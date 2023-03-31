import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-shipment',
  templateUrl: './create-shipment.component.html',
  styleUrls: ['./create-shipment.component.css']
})
export class CreateShipmentComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  miForm: FormGroup = this.fb.group({
    date: [new Date(), [Validators.required] ],  //value, validators Sincronos, validators Asincronos
    address: ['', [Validators.required, Validators.minLength(3)] ],
    weight: [0, [Validators.required, Validators.min(0)]],
  })

  ngOnInit(): void {
  }

}
