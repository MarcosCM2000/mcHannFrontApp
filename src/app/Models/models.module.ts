import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModelsRoutingModule } from './models-routing.module';
import { ModelsComponent } from './models.component';
import { SidebarComponent } from './Shared/sidebar/sidebar.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    ModelsComponent, SidebarComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ModelsRoutingModule,
  ]
})
export class ModelsModule { }
