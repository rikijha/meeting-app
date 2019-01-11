import { Injectable } from '@angular/core';
import { Subject } from '../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private sub=new Subject<any>()

  public emitter=this.sub.asObservable()

  constructor() { }

  display(type,msg){
    this.sub.next({type,msg})
    
  }
}
