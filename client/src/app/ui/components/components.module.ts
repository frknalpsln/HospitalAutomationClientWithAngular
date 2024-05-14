import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorsModule } from './doctors/doctors.module';
import { PatientsModule } from './patients/patients.module';
import { RegisterModule } from './register/register.module';



@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    DoctorsModule,
    PatientsModule,
    RegisterModule
  ]
})
export class ComponentsModule { }
