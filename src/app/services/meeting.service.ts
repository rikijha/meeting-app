import { Injectable } from '@angular/core';
import { Http } from '../../../node_modules/@angular/http';
import { CONFIG } from '../config/config';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class MeetingService {

  constructor(private http:Http,private userService:UserService) { }


  createMeeting(description,title,venue){
    const id=this.userService.getUserData().id
    return this.http.post(`${CONFIG.API_URL}/meeting/`+id,{description:description,title:title,venue:venue})
             .toPromise()
             .then(data=>{
               return data
             })
  }

  getMeetings(){
    const id=this.userService.getUserData().id
    return this.http.get(`${CONFIG.API_URL}/meetings/`+id)
           .toPromise()
           .then(data=>{
              return data
           })
  }

  getAllTask(){
    return this.http.get(`${CONFIG.API_URL}/task`)
           .toPromise()
           .then(data=>{
             return data
           })
  }

  addTask(meetingId,taskId){
    return this.http.post(`${CONFIG.API_URL}/assigntask/`+meetingId+'/'+taskId,{})
           .toPromise()
  }

  getMeetingById(id){
    return this.http.get(`${CONFIG.API_URL}/meeting/`+id)
           .toPromise()
           .then(data=>{
             return data
           })
  }

  createTask(details){
    return this.http.post(`${CONFIG.API_URL}/task`,{details:details})
           .toPromise()
           .then(data=>{
             return data
           })
  }

  deleteTask(meetingId,taskId){
    return this.http.delete(`${CONFIG.API_URL}/meeting/deletetask/`+meetingId+`/`+taskId)
           .toPromise()
           .then(data=>{
             return data
           })
  }

  updateMeeting(description,title,venue,id){
  return  this.http.put(`${CONFIG.API_URL}/meeting/`+id,{description:description,title:title,venue:venue})
          .toPromise()
          .then(data=>{
            return data
          })
  }

  deleteMeeting(id){
    return this.http.delete(`${CONFIG.API_URL}/meeting/`+id)
           .toPromise()
           .then()
  }

  addAttendee(meetingid,userId){
    return this.http.post(`${CONFIG.API_URL}/assignAttendee/`+meetingid+'/'+userId,{})
           .toPromise()
  }

  deleteAttendee(meetingid,userId){
    return this.http.delete(`${CONFIG.API_URL}/meeting/deleteattendee/`+meetingid+'/'+userId)
           .toPromise()
           .then(data=>{
             return data
           })
  }


}
