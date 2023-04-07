import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from 'src/app/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ShipmentsRoutingModule } from './shipments-routing.module';


import { HomeComponent } from './pages/home/home.component';
import { ShipmentModalComponent } from './components/shipment-modal/shipment-modal.component';
import { ConfirmActionComponent } from './components/confirm-action/confirm-action.component';


@NgModule({
  declarations: [
    HomeComponent,
    ShipmentModalComponent,
    ConfirmActionComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    ShipmentsRoutingModule,
  ]
})
export class ShipmentsModule { }
