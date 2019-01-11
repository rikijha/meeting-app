import { Component, OnInit } from '@angular/core';
import { NgForm } from '../../../../node_modules/@angular/forms';
import { AdminService } from '../../services/admin.service';
import { NotificationService } from '../../services/notification.service';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  constructor(private adminService:AdminService,private notifier:NotificationService,private router:Router) { }

  ngOnInit() {
  }

  onSubmit(f:NgForm){
    const email=f.value.email
    const name=f.value.name
    const role=f.value.role
    this.adminService.createUser(email,name,role)
      .then(data=>{
        this.notifier.display('success','User created')
        this.router.navigate(['/admin/all-user'])
      })

  }

}
