import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorsComponent } from './doctors.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [

    DoctorsComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot([
      { path: "", component: DoctorsComponent }
    ],
    )]
})

export class DoctorsModule { }
