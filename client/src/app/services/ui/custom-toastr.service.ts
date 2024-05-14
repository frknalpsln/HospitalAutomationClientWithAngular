import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class CustomToastrService {

  constructor(private toastr : ToastrService) { }

  message(message : string, title : string,
     toastrMessageType : ToastrMessageType, 
     position: ToastrPositions){
    this.toastr[toastrMessageType](message, title ,{
      positionClass : position
    });
  }

}

export enum ToastrMessageType {
Success = "success",
Info = "info",
Warning = "warning",
Error= "error"
}

export enum ToastrPositions {
TopRight = "toast-top-right",
BottomRight= "toast-bottom-right",
BottomLeft= "toast-bottom-left",
TopLeft= "toast-top-left",
TopFullWidth= "toast-top-full-width",
BottomFullWidth= "toast-bottom-full-width",
TopCenter= "toast-top-center",
BottomCenter= "toast-bottom-center"

}
