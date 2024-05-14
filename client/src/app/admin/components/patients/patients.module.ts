import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientsComponent } from './patients.component';
import { RouterModule } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { DeleteDirective } from '../../../directives/admin/delete.directive';
import {MatDialogModule} from '@angular/material/dialog';
import { DeleteDialogComponent } from '../../../dialogs/delete-dialog/delete-dialog.component';



@NgModule({
  declarations: [
    PatientsComponent,
    CreateComponent,
    ListComponent,
    DeleteDirective,
    DeleteDialogComponent

  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    RouterModule.forChild([
      {path: "", component : PatientsComponent}
    ]),
    MatFormFieldModule, MatInputModule,
    MatDatepickerModule, MatButtonModule,
    MatTableModule, MatPaginatorModule,
    MatDialogModule
  ]
})
export class PatientsModule { }
