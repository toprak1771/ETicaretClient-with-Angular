import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import { AlertifyService, MessageType, Position, } from 'src/app/services/admin/alertify.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent extends BaseComponent implements OnInit {

  constructor(private alertify:AlertifyService, spinner : NgxSpinnerService) { 
    super(spinner)
  }

  ngOnInit(): void { 
    this.showSpinner(SpinnerType.ballscalemultiple);  
  }

  m(){
    this.alertify.message("Bildiri",{
      messageType:MessageType.Warning,
      delay:5,
      dismissOthers:true,
      position:Position.BottomLeft 
    })
  }

  d(){
    this.alertify.dismis()
  }
}
