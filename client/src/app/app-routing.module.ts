import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './admin/layout/layout.component';
import { DashboardComponent } from './admin/components/dashboard/dashboard.component';
import { PatientsComponent } from './ui/components/patients/patients.component';
import { DoctorsComponent } from './ui/components/doctors/doctors.component';



const routes: Routes = [
  {
    path: "admin", component: LayoutComponent, children: [
      { path: "", component: DashboardComponent },
      {
        path: "doctors", loadChildren: () =>
          import("./admin/components/doctors/doctors.module").then(module => module.DoctorsModule)
      },
      {
        path: "patients", loadChildren: () =>
          import("./admin/components/patients/patients.module").then(module => module.PatientsModule)
      },
      {
        path: "policlinics", loadChildren: () =>
          import("./admin/components/policlinics/policlinics.module").then(module => module.PoliclinicsModule)
      }

    ]

  },




  {
    path: "patients",
    component: PatientsComponent,
  },
  {
    path: "doctors",
    component: DoctorsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
