import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { MainComponent } from './pages/main/main.component';
import { RegisterComponent } from './pages/register/register.component';



@NgModule({
  declarations: [
    LoginComponent,
    MainComponent,
    RegisterComponent,
  ],
  imports: [
    AuthRoutingModule,
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
