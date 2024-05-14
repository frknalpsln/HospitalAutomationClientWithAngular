import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientsComponent } from './patients.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [ 
    PatientsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: "", component: PatientsComponent }
    ],
    )],
  
})
export class PatientsModule { }
