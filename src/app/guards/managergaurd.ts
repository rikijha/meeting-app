import { CanActivate, Router } from "../../../node_modules/@angular/router";
import { UserService } from "../services/user.service";
import { Injectable } from "../../../node_modules/@angular/core";

@Injectable()
export class ManagerGaurd implements CanActivate{
  constructor(private userService:UserService,private router:Router){}


  canActivate(){
    const user=this.userService.getUserData()
    if(user.role==='Manager'){
      return true
    }
    this.router.navigate(['/'])
    return false
  }
}
