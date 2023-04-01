import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ShipmentsRoutingModule } from './shipments-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { MaterialModule } from '../material/material.module';
import { ShipmentModalComponent } from './components/shipment-modal/shipment-modal.component';
import { SnackBarComponent } from './components/snack-bar/snack-bar.component';
import { ConfirmActionComponent } from './components/confirm-action/confirm-action.component';


@NgModule({
  declarations: [
    HomeComponent,
    ShipmentModalComponent,
    SnackBarComponent,
    ConfirmActionComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    ShipmentsRoutingModule
  ]
})
export class ShipmentsModule { }
