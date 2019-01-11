import { Injectable } from '@angular/core';
import { Http } from '../../../node_modules/@angular/http';
import { CONFIG } from '../config/config';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:Http) { }

  createUser(email:string,name:string,role:string){
  return   this.http.post(`${CONFIG.API_URL}/user`,{email:email,name:name,role:role})
       .toPromise()
       .then(data=>{
         return data
       })
  }

  getAllUsers(){
    return this.http.get(`${CONFIG.API_URL}/users`)
           .toPromise()
           .then(data=>{
             return data
           })
  }

  deleteUser(id){
    return this.http.delete(`${CONFIG.API_URL}/user/`+id)
           .toPromise()
           .then()
  }

  editUser(id,email:string,name:string,role:string){
    return this.http.put(`${CONFIG.API_URL}/user/`+id,{email:email,name:name,role:role})
        .toPromise()
        .then()
  }
}
