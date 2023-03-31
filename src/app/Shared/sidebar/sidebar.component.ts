import { Component, OnInit } from '@angular/core';
import { SidenavOptions } from '../Interfaces/sidenav.interface';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent implements OnInit {

  sidenavList: SidenavOptions[] = [
    {
      name: 'Users',
      icon: 'account_circle',
      route: '/users'
    },
    {
      name: 'Shipments',
      icon: 'receipt',
      route: '/shipments'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
