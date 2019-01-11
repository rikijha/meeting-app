import { Component, OnInit } from '@angular/core';
import { NgForm } from '../../../../node_modules/@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '../../../../node_modules/@angular/router';
import { UserService } from '../../services/user.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService:AuthService,private router:Router,private userService:UserService,private notifier:NotificationService) { }

  ngOnInit() {
  }

  onSubmit(form :NgForm){
    let email=form.value.email;
    let password=form.value.password
    this.authService.login(email,password)
         .then(data=>{

       this.userService.set(data)
       this.router.navigate(['/'])

         })
         .catch(()=>{
           this.notifier.display('error','Invalid username/password')
         })
  }

}
