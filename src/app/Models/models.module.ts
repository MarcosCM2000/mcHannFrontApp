import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModelsRoutingModule } from './models-routing.module';
import { SharedModule } from '../Shared/shared.module';
import { ModelsComponent } from './models.component';
import { ErrorPageComponent } from './Shared/error-page/error-page.component';
import { SidebarComponent } from './Shared/sidebar/sidebar.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    ErrorPageComponent, ModelsComponent, SidebarComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ModelsRoutingModule,
    SharedModule
  ]
})
export class ModelsModule { }
