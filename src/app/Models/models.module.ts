import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModelsRoutingModule } from './models-routing.module';
import { SharedModule } from '../Shared/shared.module';
import { ModelsComponent } from './models.component';


@NgModule({
  declarations: [
    ModelsComponent
  ],
  imports: [
    CommonModule,
    ModelsRoutingModule,
    SharedModule
  ]
})
export class ModelsModule { }
