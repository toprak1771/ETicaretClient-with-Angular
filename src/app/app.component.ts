import { VariableBinding } from '@angular/compiler';
import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CustomToastrService, ToastrMessageType, ToastrPosition } from './services/ui/custom-toastr.service';
declare var $:any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ETicaretClient';
  constructor(private toastr: CustomToastrService){
     this.toastr.message("Ece <3 Toprak","Aşk Mesajı",{messageType:ToastrMessageType.Warning,position:ToastrPosition.BottomLeft})
     this.toastr.message("Ece <3 Toprak","Aşk Mesajı",{messageType:ToastrMessageType.Success,position:ToastrPosition.TopRight})   
  }
  
}



