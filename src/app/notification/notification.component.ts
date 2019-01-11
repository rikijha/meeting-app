import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  type:string =null
  msg:string =null
  constructor(private notifier:NotificationService) {
    notifier.emitter.subscribe(data =>{
      this.type=data.type
      this.msg=data.msg
      this.reset()
    })
   }

   reset(){
     setTimeout(()=>{
       this.type=null
       this.msg=null
     },3000)
   }

  ngOnInit() {
  }

}
