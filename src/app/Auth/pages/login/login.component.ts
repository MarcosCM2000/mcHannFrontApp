import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { SnackBarMessage } from 'src/app/Shared/Interfaces/snackBarMessage.interface';
import { SnackBarComponent } from 'src/app/Shared/snack-bar/snack-bar.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email] ],  //value, validators Sincronos, validators Asincronos
    password: ['', [Validators.required] ],
  })
  hide = true;
  durationInSeconds = 3;
  
  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService, private snackBar: MatSnackBar,) { }

  ngOnInit(): void {
  }

  validateField(field: string){
    return this.loginForm.controls[field].errors && this.loginForm.controls[field].touched;
  }

  openSnackBar(data: SnackBarMessage) {
    this.snackBar.openFromComponent(SnackBarComponent, {
      duration: this.durationInSeconds * 1000,
      data
    });
  }

  login() {
    this.authService.login(this.loginForm.controls['email'].value, this.loginForm.controls['password'].value)
    .subscribe(success => {
      this.authService.user = success;
      this.authService.saveToken(success.token);
      this.openSnackBar({message: 'Welcome to the application.', icon: 'check_circle'});
      this.router.navigateByUrl('/home');
    }, failure => {
      console.log(failure);
      this.openSnackBar({message: failure.error, icon: 'error'});
    });

  }

}
