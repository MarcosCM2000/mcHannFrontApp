import { NgModule } from "@angular/core";

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatNativeDateModule } from "@angular/material/core";
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
    exports:[
        MatButtonModule,
        MatCardModule,
        MatDatepickerModule,
        MatDialogModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatNativeDateModule,
        MatSidenavModule,
        MatSnackBarModule,
        MatTableModule,
        MatToolbarModule
    ],
    providers: [
        MatDatepickerModule
    ]
})
export class MaterialModule {}