import { Component, OnInit, ViewChild } from '@angular/core';
//  import { MatTable } from '@angular/material/table';
import { Shipment } from '../../Interfaces/shipment.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //TODO: Obtain from server
  shipments: Shipment[] = [
    {
      id: 1,
      created_at: new Date('2023 03 20'),
      details: {
        weight: 5,
        length: 10,
        height: 10,
        width:  10
      }
    },
    {
      id: 2,
      created_at: new Date('2023 03 21'),
      details: {
        weight: 6,
        length: 11,
        height: 11,
        width:  11
      }
    }
  ]
  //  @ViewChild(MatTable) table: MatTable<Shipment>;
  dataSource = [...this.shipments];
  displayedColumns: string[] = ['id', 'date', 'weight', 'length', 'height', 'width'];


  constructor() { }

  ngOnInit(): void {
  }

  addData() {

  }

  removeData() {

  }

}
