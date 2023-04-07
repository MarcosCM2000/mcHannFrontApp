import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SidenavOptions } from '../Interfaces/sidenav.interface';
import { AuthService } from 'src/app/Auth/services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  sidenavList: SidenavOptions[] = [
    {
      name: 'Shipments',
      icon: 'receipt',
      route: '/home/shipments'
    },
    {
      name: 'Settings',
      icon: 'settings',
      route: '/home/users'
    },
    {
      name: 'Logout',
      icon: 'power_settings_new',
      route: '/auth/login'
    }
  ];

  constructor(private _authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  navigate(route: string): void {
    if (route === '/auth/login') {
      this._authService.logout();
    }
    this.router.navigateByUrl(route);
  }

}
