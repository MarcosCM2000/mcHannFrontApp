import { Component, OnInit } from '@angular/core';
import { SidenavOptions } from '../Interfaces/sidenav.interface';

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
      route: '/auth'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
