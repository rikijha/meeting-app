import { Component, OnInit } from '@angular/core';
import { SharedService } from '../services/shared.service';
import { Router } from '../../../node_modules/@angular/router';
import { MeetingService } from '../services/meeting.service';
import { NotificationService } from '../services/notification.service';
import { UserService } from '../services/user.service';
import { AdminService } from '../services/admin.service';
import * as _ from 'lodash';


@Component({
  selector: 'app-all-meetings',
  templateUrl: './all-meetings.component.html',
  styleUrls: ['./all-meetings.component.css']
})
export class AllMeetingsComponent implements OnInit {
meeting:any;
user:any;
users:any
userId:any
  constructor(private sharedService:SharedService,private route:Router,private meetingService:MeetingService,private notifier:NotificationService,private userService:UserService,private adminService:AdminService) {
       this.sharedService.emitter.subscribe(data=>{
         this.meeting=data
         this.adminService.getAllUsers()
             .then(data=>{
               this.users=JSON.parse(data['_body'])
               _.pullAllWith(this.users,this.meeting.attendees,_.isEqual)
             })
       })
   }

  ngOnInit() {
    this.userService.statusChange.subscribe(data=>{
      this.user=data
    })
    this.user=this.userService.getUserData()


  }
addTask(meeting){

  this.route.navigate(['/manager/add-task',{id:meeting.id}])
}

deleteTask(meetingid,taskid){
  this.meetingService.deleteTask(meetingid,taskid)
      .then(data=>{
        this.notifier.display('success','Task deleted successfully')
        this.meeting=JSON.parse(data['_body'])
      })
}

editMeeting(meeting){
  this.route.navigate(['manager/edit-meeting',{id:meeting.id}])
}

deleteMeeting(id){
  this.meetingService.deleteMeeting(id)
      .then(()=>{
        this.route.navigate(['/'])
      })
}

addAttendee(){
  this.meetingService.addAttendee(this.meeting.id,this.userId)
      .then(()=>{

      const u=  _.remove(this.users,user=>{
          return user['id']==this.userId

        })

        this.meeting.attendees.push(u[0])
      })
}

deleteAttendee(attendee){
  this.meetingService.deleteAttendee(this.meeting.id,attendee.id)
      .then(data=>{
        this.notifier.display('success','Attendee deleted successfully')
        this.users.push(attendee)
        this.meeting=JSON.parse(data['_body'])
      })
}
}
