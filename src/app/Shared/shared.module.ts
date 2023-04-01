import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';

import { ErrorPageComponent } from './error-page/error-page.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [ErrorPageComponent, SidebarComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [ErrorPageComponent, SidebarComponent]
})
export class SharedModule { }
