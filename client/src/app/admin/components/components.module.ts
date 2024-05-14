import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorsModule } from './doctors/doctors.module';
import { PatientsModule } from './patients/patients.module';
import { PoliclinicsModule } from './policlinics/policlinics.module';
import { DashboardModule } from './dashboard/dashboard.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DoctorsModule,
    PatientsModule,
    PoliclinicsModule,
    DashboardModule
  ]
})
export class ComponentsModule { }
