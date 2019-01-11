import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { NotificationService } from '../../services/notification.service';
import * as _ from 'lodash';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-all-user-detail',
  templateUrl: './all-user-detail.component.html',
  styleUrls: ['./all-user-detail.component.css']
})
export class AllUserDetailComponent implements OnInit {
users:any=[]
  constructor(private adminService:AdminService,private notifier:NotificationService,private router:Router) { }

  ngOnInit() {
    this.adminService.getAllUsers()
        .then(data=>{
            this.users=JSON.parse(data['_body'])
            
        })

  }

  onDeleteClicked(event){
    const id=event.id
    this.adminService.deleteUser(id)
      .then(()=>{
        this.notifier.display('success',event.name+'deleted sucessfully')
     _.remove(this.users,data=>{
          return   event.id==data['id']
      })



      })
  }

  onEditClicked(event){
    this.router.navigate(['/admin/edit-user',{id:event.id,email:event.email,name:event.name,role:event.role}])
  }

}
