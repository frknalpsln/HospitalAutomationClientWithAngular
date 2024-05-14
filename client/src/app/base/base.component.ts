import { NgxSpinnerService } from "ngx-spinner";

export class BaseComponent {

constructor(private spinner : NgxSpinnerService) {}

showSpinner(showSpinnerType : SpinnerType){
  this.spinner.show(showSpinnerType);
  setTimeout(() => this.hideSpinner(showSpinnerType) , 1000);
}

hideSpinner(showSpinnerType : SpinnerType){
  this.spinner.hide(showSpinnerType);
}

}

export enum SpinnerType {
  BallSpinClockwise = "spin1",
  AllScaleMultiple = "spin2",
  LineScale = "spin3"
}
