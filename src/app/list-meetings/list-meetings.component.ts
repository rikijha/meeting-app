import { Component, OnInit } from '@angular/core';
import { MeetingService } from '../services/meeting.service';
import { SharedService } from '../services/shared.service';
import * as _ from 'lodash';
@Component({
  selector: 'app-list-meetings',
  templateUrl: './list-meetings.component.html',
  styleUrls: ['./list-meetings.component.css']
})
export class ListMeetingsComponent implements OnInit {
meetings=[]
searchText:string="";
  constructor(private meetingService:MeetingService,private sharedService:SharedService) { }

  ngOnInit() {
    this.meetingService.getMeetings()
        .then(data=>{
          this.meetings=JSON.parse(data['_body'])
          this.sharedService.display(_.first(this.meetings))
        })
  }

  onClicked(event){
    this.sharedService.display(event)
  }

}
