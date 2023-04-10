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
  shipments: Shipment[] = [];
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
      result.id = id;
      this.shipmentService.EditShipment(result)
      .subscribe(_ =>{
        this.getShipments();
        this.openSnackBar({message: 'Package successfully edited', icon: 'update'});
      }, failure => {
        this.openSnackBar({message: failure.error.error, icon: 'error'});
      });
    });
  }

  removeData(id: number) {
    const dialogRef = this.dialog.open(ConfirmActionComponent, { width: '250px' });
    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (!result) {
        return;
      }
      this.shipmentService.DeleteShipment({id})
      .subscribe(_ => {
        this.getShipments();
        this.openSnackBar({message: 'Package successfully deleted', icon: 'delete'});
        }, failure => {
        this.openSnackBar({message: failure.error.error, icon: 'error'});
        });
      });
    ;
  }

  deleteAllData() {
    const dialogRef = this.dialog.open(ConfirmActionComponent, { width: '250px' });
    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (!result) {
        return;
      }
      this.shipmentService.DeleteAllShipments()
      .subscribe(_ => {
        this.getShipments();
        this.openSnackBar({message: 'All data successfully deleted', icon: 'delete'});
        }, failure => {
        this.openSnackBar({message: failure.error.error, icon: 'error'});
      });
    });
  }

}
