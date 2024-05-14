import { Component, OnInit } from '@angular/core';
import { AlertifyService, MessageType, Position } from '../../services/admin/alertify.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent implements OnInit{

constructor(private alertify : AlertifyService) {
  
}

  ngOnInit(): void {
    this.alertify.message("Yönetim Paneline Giriş Başarılı" , MessageType.Success , Position.BottomRight  )
  }

}
