import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientsModule } from './components/patients/patients.module';
import { DoctorsModule } from './components/doctors/doctors.module';
import { ComponentsModule } from './components/components.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports: [
  
  ]
})
export class UiModule { }
