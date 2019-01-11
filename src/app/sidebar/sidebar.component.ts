import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  role:string
  constructor(private userService:UserService,private authService:AuthService) {

   }

  ngOnInit() {

this.isLoggedIn()
this.userService.statusChange.subscribe(data=>{
  if(data){
    if(this.userService.getUserData()){
    this.role=this.userService.getUserData().role
    }
  }
})
if(this.userService.getUserData()){
this.role=this.userService.getUserData().role
}

  }

logout(){
  this.authService.logout()
}

isLoggedIn():boolean{

return  this.authService.isLoggedIn()
}


}
