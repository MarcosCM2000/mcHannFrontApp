import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShipmentsRoutingModule } from './shipments-routing.module';
import { MaterialModule } from '../material/material.module';
import { CreateComponent } from './pages/create/create.component';
import { HomeComponent } from './pages/home/home.component';


@NgModule({
  declarations: [
    CreateComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ShipmentsRoutingModule
  ]
})
export class ShipmentsModule { }
