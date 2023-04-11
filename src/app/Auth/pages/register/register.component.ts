import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

import { AuthService } from '../../services/auth.service';
import { SnackBarMessage } from 'src/app/Shared/Interfaces/snackBarMessage.interface';
import { SnackBarComponent } from 'src/app/Shared/snack-bar/snack-bar.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
    email: ['', [Validators.required, Validators.email] ],  //value, validators Sincronos, validators Asincronos
    password: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(10)] ],
  })
  durationInSeconds = 3;
  
  constructor(private _authService: AuthService, private fb: FormBuilder, private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  validateField(field: string){
    return this.registerForm.controls[field].errors && this.registerForm.controls[field].touched;
  }

  openSnackBar(data: SnackBarMessage) {
    this.snackBar.openFromComponent(SnackBarComponent, {
      duration: this.durationInSeconds * 1000,
      data
    });
  }

  signup() {
    this._authService.register(
      this.registerForm.controls['email'].value,
      this.registerForm.controls['name'].value,
      this.registerForm.controls['password'].value
    ).subscribe(success => {
      this.router.navigateByUrl('/auth/login');
    }, failure => {
      console.log(failure);
      this.openSnackBar({message: failure.error, icon: 'error'});
    });
  }

}
