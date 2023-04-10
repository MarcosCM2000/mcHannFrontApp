import { Component, OnInit } from '@angular/core';
import { user } from '../../interfaces/user.interface';
import { AuthService } from 'src/app/Auth/services/auth.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.components.css']
})
export class UsersComponent implements OnInit {

  //TODO: Call endpoint for obtaining user info
  userProfile: user = {
    username: '',
    email: '',
    password: ''
  }

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.getUserInformation();
  }
  getUserInformation(){
    this.userProfile.username = this.authService.user.name;
    this.userProfile.email = this.authService.user.email;
  }

}
