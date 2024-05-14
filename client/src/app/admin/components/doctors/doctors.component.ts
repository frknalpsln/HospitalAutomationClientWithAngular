import { Component, OnInit, ViewChild } from '@angular/core';
import { BaseComponent, SpinnerType } from '../../../base/base.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { HttpClientService } from '../../../services/common/http-client.service';
import { CreateDoctor } from '../../../contracts/create-doctor';
import { ListComponent } from './list/list.component';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrl: './doctors.component.scss'
})
export class DoctorsComponent extends BaseComponent implements OnInit {

  constructor(spinner: NgxSpinnerService, private httpClientService: HttpClientService) {
    super(spinner);

  }
  ngOnInit(): void {
    this.showSpinner(SpinnerType.LineScale);
 
}

@ViewChild(ListComponent) listComponents : ListComponent;

createdDoctor(createdDoctor : CreateDoctor){
this.listComponents.getDoctors();
}

}