import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { ConfirmActionComponent } from '../../components/confirm-action/confirm-action.component';
import { ShipmentModalComponent } from '../../components/shipment-modal/shipment-modal.component';
import { SnackBarComponent } from '../../../../Shared/snack-bar/snack-bar.component';
import { ShipmentService } from '../../services/shipment.service';

import { Shipment } from '../../Interfaces/shipment.interface';
import { SnackBarMessage } from '../../../../Shared/Interfaces/snackBarMessage.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //TODO: Call endpoint for obtaining all packages
  shipments: Shipment[] = [];/*[
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
  ]*/
  //  @ViewChild(MatTable) table: MatTable<Shipment>;
  dataSource = [...this.shipments];
  displayedColumns: string[] = ['date', 'address', 'weight', 'length', 'height', 'width', 'edit', 'delete'];
  durationInSeconds = 3;

  constructor(private dialog: MatDialog, private snackBar: MatSnackBar, private shipmentService: ShipmentService ) { }

  ngOnInit(): void {
    this.getShipments();
  }

  openSnackBar(data: SnackBarMessage) {
    this.snackBar.openFromComponent(SnackBarComponent, {
      duration: this.durationInSeconds * 1000,
      data
    });
  }

  getShipments(){
    this.shipmentService.GetAllShipments()
    .subscribe(success => {
      this.shipments = success;
      this.dataSource = [...this.shipments];
    }, failure =>{
      console.log(failure);
      this.openSnackBar({message: failure.error.error, icon: 'error'});
    })
  }

  addData() {
    const dialogRef = this.dialog.open(ShipmentModalComponent);
    dialogRef.afterClosed().subscribe((result: Shipment | undefined) => {
      if (!result) {
        return;
      }
      this.shipmentService.CreateShipment(result)
      .subscribe(_ => {
        this.getShipments();
        this.openSnackBar({message: 'Package successfully created', icon: 'check_circle'});
      }, failure => {
        this.openSnackBar({message: failure.error.error, icon: 'error'});
      });
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
      //TODO: Call endpoint for updating package
      const intexToUpdate = this.shipments.findIndex(shipment => shipment.id === id);
      this.shipments[intexToUpdate] = result!;
      this.dataSource = [...this.shipments];
      this.openSnackBar({message: 'Package successfully edited', icon: 'update'});
    });
  }

  removeData(id: number) {
    //TODO: Call endpoint for deleting package
    this.shipments = this.shipments.filter(shipment => shipment.id !== id);
    this.dataSource = [...this.shipments];
    this.openSnackBar({message: 'Package successfully deleted', icon: 'delete'});
  }

  deleteAllData() {
    //TODO: Call endpoint for deleting all package table
    const dialogRef = this.dialog.open(ConfirmActionComponent, { width: '250px' });
    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (!result) {
        return;
      }
      this.shipments = [];
      this.dataSource = [...this.shipments];
      this.openSnackBar({message: 'All data successfully deleted', icon: 'delete'});
    });
  }

}
