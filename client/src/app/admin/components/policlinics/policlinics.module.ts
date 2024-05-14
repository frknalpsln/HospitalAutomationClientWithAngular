import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoliclinicsComponent } from './policlinics.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    PoliclinicsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: "", component: PoliclinicsComponent}
    ])
  ]
})
export class PoliclinicsModule { }
