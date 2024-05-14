import { Directive, ElementRef, EventEmitter, HostListener, Input, Output, Renderer2, input } from '@angular/core';
import { HttpClientService } from '../../services/common/http-client.service';
import { PatientService } from '../../services/common/models/patient.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { SpinnerType } from '../../base/base.component';
import { MatDialog } from '@angular/material/dialog';
import { DeleteDialogComponent, DeleteState } from '../../dialogs/delete-dialog/delete-dialog.component';
import { AlertifyService, MessageType, Position } from '../../services/admin/alertify.service';
import { HttpErrorResponse } from '@angular/common/http';
declare var $: any


@Directive({
  selector: '[appDelete]'
})
export class DeleteDirective {

  constructor(
    private element: ElementRef,
    private _renderer: Renderer2,
    private httpClientService: HttpClientService,
    private spinner: NgxSpinnerService,
    public dialog: MatDialog,
    private alertifyService: AlertifyService
  ) {
    const img = _renderer.createElement("img");
    img.setAttribute("src", "../../../../../assets/delete.png");
    img.setAttribute("style", "cursor : pointer;");
    _renderer.appendChild(element.nativeElement, img);
  }

  openDialog(afterClosed: any): void {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      data: DeleteState.Yes
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result == DeleteState.Yes)
        afterClosed()

    });
  }


  @Input() id: string;
  @Input() controller: string;
  @Output() callBack: EventEmitter<any> = new EventEmitter();

  @HostListener("click")
  async onClick() {
    this.openDialog(async () => {
      this.spinner.show(SpinnerType.BallSpinClockwise);
      const td: HTMLTableCellElement = this.element.nativeElement;
      this.httpClientService.delete({
        controller: this.controller,
      }, this.id).subscribe(data => {
        $(td.parentElement).animate({
          opacity: 0,
          left: "+= 50",
          height: "toogle"
        }, 700, () => {
          this.callBack.emit();
          this.alertifyService.message("Kayıt başarıyla silinmiştir.", MessageType.Success, Position.BottomCenter)
        })
      } , (errorResponse : HttpErrorResponse) => {
        this.spinner.hide(SpinnerType.BallSpinClockwise);

        this.alertifyService.message("Kayıt silinirken bir hatayla karşılaşıldı.", MessageType.Error, Position.BottomCenter)

      });
    })
  }
}
