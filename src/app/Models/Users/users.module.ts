import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from 'src/app/material/material.module';
import { UsersRoutingModule } from './users-routing.module';

import { UsersComponent } from './pages/users/users.component';


@NgModule({
  declarations: [ UsersComponent ],
  imports: [
    CommonModule,
    MaterialModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
