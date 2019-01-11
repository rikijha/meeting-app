import { Injectable } from '@angular/core';
import { Http } from '../../../node_modules/@angular/http';
import { CONFIG } from '../config/config';
import { Router } from '../../../node_modules/@angular/router';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:Http,private router:Router,private userService:UserService) { }

  login(email:string,password:string){
    return this.http.post(`${CONFIG.API_URL}/user/authenticate`,{password:password,username:email})
          .toPromise()
          .then(data=>{
            let user=data.json()
            return user
          })
  }

  logout(){
    this.userService.destroy()
    this.router.navigate(['/login'])
  }

  isLoggedIn():boolean{

    let user=localStorage.getItem('user')

    if (user) {return true}

    return false
  }

  generateCode(email:string){
  return  this.http.get(`${CONFIG.API_URL}/user/generatecode/`+email)
        .toPromise()
        .then(data=>{
          return data
        })
  }

  verifyCode(code,email){
    return this.http.get(`${CONFIG.API_URL}/user/verifyCode/`+email+`/`+code)
           .toPromise()
           .then(data=>{
             return data
           })

  }

  setPassword(email:string,password){
    return this.http.post(`${CONFIG.API_URL}/user/setpassword/`+email,{password:password})
             .toPromise()
             .then(data=>{
               return data
             })
  }
}
