import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  constructor() { }
@Input()  user
@Output() deleteClicked=new EventEmitter<any>()
@Output() editClicked=new EventEmitter<any>()
  ngOnInit() {

  }

  deleteUser(){
  this.deleteClicked.emit(this.user)
  }

  editUser(){
    this.editClicked.emit(this.user)
  }

}
