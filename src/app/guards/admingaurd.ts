import { CanActivate, Router } from "../../../node_modules/@angular/router";
import { Injectable } from "../../../node_modules/@angular/core";
import { UserService } from "../services/user.service";

@Injectable()
export class AdminGaurd implements CanActivate{

  constructor(private userService:UserService,private router:Router){}

  canActivate(){
    const user=this.userService.getUserData()
    if(user.role==='admin'){
      return true
    }
    this.router.navigate(['/'])
    return false
  }
}
