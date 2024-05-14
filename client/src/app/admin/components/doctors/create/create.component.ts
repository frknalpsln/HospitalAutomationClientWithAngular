import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgxSpinner, NgxSpinnerService } from 'ngx-spinner';
import { DoctorService } from '../../../../services/common/models/doctor.service';
import { BaseComponent, SpinnerType } from '../../../../base/base.component';
import { AlertifyService, MessageType, Position } from '../../../../services/admin/alertify.service';
import { CreateDoctor } from '../../../../contracts/create-doctor';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss'
})
export class CreateComponent extends BaseComponent implements OnInit{

  @Output() createdDoctor : EventEmitter<CreateDoctor> = new EventEmitter();

  constructor(spin : NgxSpinnerService , private doctorService : DoctorService , private alertify : AlertifyService ) {    super(spin);  }

  ngOnInit(): void {

  }

  create(name : HTMLInputElement , surname : HTMLInputElement , idNumber : HTMLInputElement){
this.showSpinner(SpinnerType.BallSpinClockwise);

const _create_doctor :  CreateDoctor = new CreateDoctor();
_create_doctor.name = name.value;
_create_doctor.surname = surname.value;
_create_doctor.identificationNumber = idNumber.value;

this.doctorService.create(_create_doctor , () => {
  this.hideSpinner(SpinnerType.BallSpinClockwise);
  this.alertify.message("Doktor kayıtı başarıyla eklendi" , MessageType.Success , Position.TopRight);
  this.createdDoctor.emit(_create_doctor)
},errorMessage => {
  this.alertify.message(errorMessage,MessageType.Error,Position.TopCenter)
});


  }
}
