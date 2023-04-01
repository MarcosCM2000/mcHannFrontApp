import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { ShipmentModalComponent } from '../../components/shipment-modal/shipment-modal.component';
import { SnackBarComponent } from '../../components/snack-bar/snack-bar.component';

import { Shipment } from '../../Interfaces/shipment.interface';
import { SnackBarMessage } from '../../Interfaces/snackBarMessage.interface';

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
        address: '1600 Amphitheatre Pk',
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
        address: '1701 Amphitheatre Pk',
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
  displayedColumns: string[] = ['date', 'address', 'weight', 'length', 'height', 'width', 'edit', 'delete'];
  durationInSeconds = 3;

  constructor(private dialog: MatDialog, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  openSnackBar(data: SnackBarMessage) {
    this.snackBar.openFromComponent(SnackBarComponent, {
      duration: this.durationInSeconds * 1000,
      data
    });
  }

  addData() {
    const dialogRef = this.dialog.open(ShipmentModalComponent);
    dialogRef.afterClosed().subscribe((result: Shipment | undefined) => {
      if (!result) {
        return;
      }
      this.openSnackBar({message: 'Package successfully created', icon: 'check_circle'});
      //TODO: Call endpoint for creating package
      this.shipments.push(result!);
      this.dataSource = [...this.shipments];
    });
  }

  editData(id: number) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = this.shipments.find(shipment => shipment.id === id);
    const dialogRef = this.dialog.open(ShipmentModalComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((result: Shipment | undefined) => {
      if (!result) {
        return;
      }
      this.openSnackBar({message: 'Package successfully edited', icon: 'update'});
      //TODO: Call endpoint for updating package
      const intexToUpdate = this.shipments.findIndex(shipment => shipment.id === id);
      this.shipments[intexToUpdate] = result!;
      this.dataSource = [...this.shipments];
    });
  }

  removeData() {

  }

}
