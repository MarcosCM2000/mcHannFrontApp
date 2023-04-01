import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email] ],  //value, validators Sincronos, validators Asincronos
    password: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(10)] ],
  })
  
  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
  }

  validateField(field: string){
    return this.loginForm.controls[field].errors && this.loginForm.controls[field].touched;
  }

  login() {
    //TODO: Call endpoint for log in
    this.router.navigateByUrl('/home');
  }

}
