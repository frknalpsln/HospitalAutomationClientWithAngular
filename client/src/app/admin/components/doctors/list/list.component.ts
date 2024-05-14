import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { DoctorService } from '../../../../services/common/models/doctor.service';
import { AlertifyService, MessageType, Position } from '../../../../services/admin/alertify.service';
import { BaseComponent, SpinnerType } from '../../../../base/base.component';
import { ListDoctor } from '../../../../contracts/list-doctor';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent extends BaseComponent implements OnInit {

  constructor(spinner: NgxSpinnerService, private doctorService: DoctorService, private alertify: AlertifyService) { super(spinner); }

  async ngOnInit() {
    await this.getDoctors();

  }

  displayedColumns: string[] = ['name', 'surname', 'identificationNumber', 'createdDate', 'updatedDate'];
  dataSource: MatTableDataSource<ListDoctor> = null;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  async getDoctors() {
    this.showSpinner(SpinnerType.BallSpinClockwise);
    const allDoctors : {totalCount : number; doctors : ListDoctor[]} = await    this.doctorService.read(this.paginator ? this.paginator.pageIndex : 0 , this.paginator ? this.paginator.pageSize : 5 ,
      () => this.hideSpinner(SpinnerType.BallSpinClockwise) ,errorMessage => 
        this.alertify.message(errorMessage , MessageType.Error , Position.TopRight)) 
       this.dataSource = new MatTableDataSource<ListDoctor>(allDoctors.doctors)
       this.paginator.length = allDoctors.totalCount;

  }

  async pageChanged() {
    await this.getDoctors();
  }


}
