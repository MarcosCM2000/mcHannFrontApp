import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-action',
  templateUrl: './confirm-action.component.html',
  styleUrls: ['./confirm-action.component.css']
})
export class ConfirmActionComponent {

  constructor(private dialogRef: MatDialogRef<ConfirmActionComponent>) { }

  close(confirm: boolean) {
    this.dialogRef.close(confirm);
  }

}
