import { Component, OnInit, ViewChild, viewChild } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from '../../../base/base.component';
import { CreatePatient } from '../../../contracts/create-patient';
import { ListComponent } from './list/list.component';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrl: './patients.component.scss'
})
export class PatientsComponent extends BaseComponent implements OnInit{

constructor(spinner : NgxSpinnerService) {
  super(spinner);
}

  ngOnInit(): void {
this.showSpinner(SpinnerType.AllScaleMultiple);
  }

  @ViewChild(ListComponent) listComponents : ListComponent;

  createdPatient(createdPatient : CreatePatient){
this.listComponents.getPatients();
  }

}
