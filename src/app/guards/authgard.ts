import { Injectable } from "../../../node_modules/@angular/core";
import { CanActivate, Router } from "../../../node_modules/@angular/router";
import { AuthService } from "../services/auth.service";



@Injectable()
export class AuthGuard implements CanActivate{
  constructor(
    private authService:AuthService,
    private router:Router
  ){}
   canActivate(){
     if(this.authService.isLoggedIn()){ return true}

     this.router.navigate(['/login'])
     return false
   }

}
