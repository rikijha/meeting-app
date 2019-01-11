import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
statusChange:EventEmitter<any>=new EventEmitter<any>()
  constructor() { }

  set(userdata){
    localStorage.setItem('user',JSON.stringify(userdata))
    this.statusChange.emit(userdata)

  }

  getUserData(){
  const user=  localStorage.getItem('user')
  return JSON.parse(user)
  }

  destroy(){
    localStorage.removeItem('user')
    this.statusChange.emit(null)
  }
}
