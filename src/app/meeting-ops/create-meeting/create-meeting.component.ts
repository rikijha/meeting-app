import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { NgForm } from '../../../../node_modules/@angular/forms';
import { MeetingService } from '../../services/meeting.service';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-create-meeting',
  templateUrl: './create-meeting.component.html',
  styleUrls: ['./create-meeting.component.css']
})
export class CreateMeetingComponent implements OnInit {
public Editor = ClassicEditor;



ckeConfig: any={};
  constructor(private meetingService:MeetingService,private route:Router) { }

  ngOnInit() {
    this.ckeConfig={
      toolbar: [ 'heading', '|', 'bold', 'italic','undo','redo','bulletedList','numberedList',, 'blockQuote'],

    }
  }



   onSubmit(myForm:NgForm){
     const description=myForm.value.description
     const title=myForm.value.title
     const venue=myForm.value.venue
     this.meetingService.createMeeting(description,title,venue)
         .then(()=>{
           this.route.navigate(['/'])
         })
   }



}
