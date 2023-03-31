import { NgModule } from "@angular/core";

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
    exports:[
        MatButtonModule,
        MatIconModule,
        MatListModule,
        MatSidenavModule,
        MatTableModule,
        MatToolbarModule
    ]
})
export class MaterialModule {}