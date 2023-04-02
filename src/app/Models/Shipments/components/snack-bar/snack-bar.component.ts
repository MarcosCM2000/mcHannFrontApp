import { Component, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
import { SnackBarMessage } from '../../Interfaces/snackBarMessage.interface';

@Component({
  selector: 'app-snack-bar',
  templateUrl: './snack-bar.component.html',
  styleUrls: ['./snack-bar.component.css']
})
export class SnackBarComponent {
  content: SnackBarMessage;
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: SnackBarMessage) { 
    this.content = this.data;
  }
}
