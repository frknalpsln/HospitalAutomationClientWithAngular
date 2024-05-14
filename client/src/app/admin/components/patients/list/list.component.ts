import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ListPatient } from '../../../../contracts/list-patient';
import { MatTableDataSource } from '@angular/material/table';
import { PatientService } from '../../../../services/common/models/patient.service';
import { BaseComponent, SpinnerType } from '../../../../base/base.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { AlertifyService, MessageType, Position } from '../../../../services/admin/alertify.service';
import { MatPaginator } from '@angular/material/paginator';
declare var $ : any

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent extends BaseComponent implements OnInit{

constructor(private patientService : PatientService,  spinner : NgxSpinnerService , private alertifySerive : AlertifyService ){
  super(spinner);
} 
 
 
  displayedColumns: string[] = ['name', 'surname', 'fatherName', 'motherName' , `identificationNumber` , `createdDate` , `updatedDate` , `edit` , `delete`];
  dataSource: MatTableDataSource<ListPatient> = null;
  @ViewChild(MatPaginator) paginator: MatPaginator;

async getPatients(){
  this.showSpinner(SpinnerType.BallSpinClockwise);
  const allPatients : {totalCount : number; patients : ListPatient[]} = await    this.patientService.read(this.paginator ? this.paginator.pageIndex : 0 , this.paginator ? this.paginator.pageSize : 5 ,
    () => this.hideSpinner(SpinnerType.BallSpinClockwise) ,errorMessage => 
      this.alertifySerive.message(errorMessage , MessageType.Error , Position.TopRight)) 
     this.dataSource = new MatTableDataSource<ListPatient>(allPatients.patients)
     this.paginator.length = allPatients.totalCount;
  
}

// delete(id , event){
// alert(id);
// const img : HTMLImageElement = event.srcElement;
// $(img.parentElement.parentElement).fadeOut(2000);
// }

async pageChanged(){
  await this.getPatients();  
}

 async ngOnInit()  {
 await this.getPatients();
  }


}