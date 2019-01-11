import { Component, OnInit } from '@angular/core';
import { MeetingService } from 'src/app/services/meeting.service';
import { NotificationService } from '../../services/notification.service';
import * as _ from 'lodash';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';
import { NgForm } from '../../../../node_modules/@angular/forms';
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
tasks:any;
meeting:any;
id:any
  constructor(private meetingService:MeetingService,private notifier:NotificationService,private route:ActivatedRoute) { }

  ngOnInit() {
  this.id=this.route.snapshot.paramMap.get('id')
   this.meetingService.getMeetingById(this.id)
       .then(data=>{
         this.meeting=JSON.parse(data['_body'])

         this.meetingService.getAllTask()
             .then(data=>{
               this.tasks=JSON.parse(data['_body'])
             _.pullAllWith(this.tasks,this.meeting.task,_.isEqual)
             })


       })

  }



  addTask(task){
    this.meetingService.addTask(this.meeting.id,task.id).
        then(()=>{
          this.notifier.display('success','Task added successfully')
          _.remove(this.tasks,data=>{
            return data['id']==task.id
          })
        })
  }

  createTask(task:NgForm){
    this.meetingService.createTask(task.value.details)
        .then(data=>{
          this.tasks.push(JSON.parse(data['_body']))
        })
  }

}
