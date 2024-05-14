import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PatientService } from '../../../../services/common/models/patient.service';
import { CreatePatient } from '../../../../contracts/create-patient';
import { BaseComponent, SpinnerType } from '../../../../base/base.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { AlertifyService, MessageType, Position } from '../../../../services/admin/alertify.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss'
})
export class CreateComponent extends BaseComponent implements OnInit{

  
  constructor(spinner : NgxSpinnerService,
      private patientService : PatientService ,
      private alertify : AlertifyService) 
      { super(spinner); }

  ngOnInit(): void {
  }

  @Output() createdPatient : EventEmitter<CreatePatient> = new EventEmitter();
    create(name : HTMLInputElement ,
       surname : HTMLInputElement,
        fatherName : HTMLInputElement,
         motherName: HTMLInputElement ,
         idNumber: HTMLInputElement){
this.showSpinner(SpinnerType.BallSpinClockwise);

    const create_patient : CreatePatient = new CreatePatient();
    create_patient.name = name.value;
    create_patient.surname = surname.value;
    create_patient.fatherName = fatherName.value;
    create_patient.motherName = motherName.value;
    create_patient.identificationNumber = idNumber.value;

    this.patientService.create(create_patient , () => {
    this.hideSpinner(SpinnerType.BallSpinClockwise);
  this.alertify.message(`Başarılı` , MessageType.Success , Position.BottomRight);
  this.createdPatient.emit(create_patient)
},errorMessage => {
  this.alertify.message(errorMessage,MessageType.Error,Position.TopCenter)
});

    
    }
}
