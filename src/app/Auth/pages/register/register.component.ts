import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
  
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  validateField(field: string){
    return this.registerForm.controls[field].errors && this.registerForm.controls[field].touched;
  }

  signup() {
    //TODO: Call endpoint for log in
    console.log('sss');
  }

}
