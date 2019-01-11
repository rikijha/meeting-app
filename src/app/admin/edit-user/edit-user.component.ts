import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '../../../../node_modules/@angular/router';
import { AdminService } from '../../services/admin.service';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  constructor(private route:ActivatedRoute,private adminService:AdminService,private notifier:NotificationService,private router:Router) { }
id:any
email:string
name:string
role:string
  ngOnInit() {
    this.id=this.route.snapshot.paramMap.get('id')
    this.email=this.route.snapshot.paramMap.get('email')
    this.name=this.route.snapshot.paramMap.get('name')
    this.role=this.route.snapshot.paramMap.get('role')

  }

  saveChanges(){
    this.adminService.editUser(this.id,this.email,this.name,this.role)
        .then(()=>{
          this.notifier.display('success','Changes Saved')
          this.router.navigate(['/admin/all-user'])
        })
  }

  cancel(){
    this.router.navigate(['/admin/all-user'])
  }
}
