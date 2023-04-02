import { Component, OnInit } from '@angular/core';
import { user } from '../../interfaces/user.interface';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.components.css']
})
export class UsersComponent implements OnInit {

  //TODO: Call endpoint for obtaining user info
  userProfile: user = {
    username: 'Marcos Calderon',
    email: 'mcalderonig@gmail.com',
    password: '***'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
