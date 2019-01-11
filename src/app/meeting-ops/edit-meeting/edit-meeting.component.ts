import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { MeetingService } from '../../services/meeting.service';
import { ActivatedRoute, Router } from '../../../../node_modules/@angular/router';
import { NgForm } from '../../../../node_modules/@angular/forms';

@Component({
  selector: 'app-edit-meeting',
  templateUrl: './edit-meeting.component.html',
  styleUrls: ['./edit-meeting.component.css']
})
export class EditMeetingComponent implements OnInit {
public Editor = ClassicEditor;
ckeConfig: any={};
title:any;
description:any;
venue:any;
id:any;
  constructor(private meetingService:MeetingService,private activateroute:ActivatedRoute,private route:Router) { }

  ngOnInit() {
    this.id=this.activateroute.snapshot.paramMap.get('id')
    this.meetingService.getMeetingById(this.id)
        .then(data=>{
          const meeting=JSON.parse(data['_body'])
          this.title=meeting.title
          this.description=meeting.description
          this.venue=meeting.venue
        })
    this.ckeConfig={
      toolbar: [ 'heading', '|', 'bold', 'italic','undo','redo','bulletedList','numberedList',, 'blockQuote'],
    }
  }

  onSubmit(myForm:NgForm){
    const description=myForm.value.description
    const title=myForm.value.title
    const venue=myForm.value.venue
    this.meetingService.updateMeeting(description,title,venue,this.id)
        .then(()=>{
          this.route.navigate(['/'])
        })
  }

  cancel(){
    this.route.navigate(['/'])
  }

}
