import { Component, OnInit, ViewChild } from '@angular/core';
//  import { MatTable } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

import { Shipment } from '../../Interfaces/shipment.interface';
import { CreateShipmentComponent } from '../../components/create-shipment/create-shipment.component';

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
        address: '1600 Amphitheatre Pkwy',
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
        address: '1701 Amphitheatre Pkwy',
        weight: 6,
        length: 11,
        height: 11,
        width:  11
      }
    }
  ]
  //  @ViewChild(MatTable) table: MatTable<Shipment>;
  dataSource = [...this.shipments];
  //TODO: Implement edit & delete functionality
  //TODO: Implement modal for adding & editing package
  displayedColumns: string[] = ['id', 'date', 'address', 'weight', 'length', 'height', 'width', 'edit', 'delete'];


  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  addData() {
    const dialogRef = this.dialog.open(CreateShipmentComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log('success');
    });
  }

  removeData() {

  }

}
