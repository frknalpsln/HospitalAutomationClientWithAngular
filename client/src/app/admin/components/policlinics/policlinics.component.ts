import { Component, OnInit } from '@angular/core';
import { BaseComponent, SpinnerType } from '../../../base/base.component';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-policlinics',
  templateUrl: './policlinics.component.html',
  styleUrl: './policlinics.component.scss'
})
export class PoliclinicsComponent extends BaseComponent implements OnInit{

constructor(spinner : NgxSpinnerService) {
  super(spinner);
  
}

  ngOnInit(): void {
this.showSpinner(SpinnerType.BallSpinClockwise);
  }

}
