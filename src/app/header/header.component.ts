import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
user
  constructor(private authService:AuthService,private userService:UserService) { }

  ngOnInit() {
    this.isLoggedIn()
    this.userService.statusChange.subscribe(data=>{
      this.user=data
    })
    this.user=this.userService.getUserData()
  }

  isLoggedIn(){
    return this.authService.isLoggedIn()
  }

}
