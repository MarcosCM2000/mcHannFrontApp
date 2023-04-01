import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { MaterialModule } from '../material/material.module';
import { UsersComponent } from './pages/users/users.component';


@NgModule({
  declarations: [
    UsersComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    UsersRoutingModule,
  ]
})
export class UsersModule { }
