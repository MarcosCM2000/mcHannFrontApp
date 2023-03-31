import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ShipmentsRoutingModule } from './shipments-routing.module';
import { CreateComponent } from './pages/create/create.component';
import { HomeComponent } from './pages/home/home.component';
import { MaterialModule } from '../material/material.module';
import { CreateShipmentComponent } from './components/create-shipment/create-shipment.component';


@NgModule({
  declarations: [
    CreateComponent,
    HomeComponent,
    CreateShipmentComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    ShipmentsRoutingModule
  ]
})
export class ShipmentsModule { }
