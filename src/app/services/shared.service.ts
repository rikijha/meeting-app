import { Injectable } from '@angular/core';
import { Subject } from '../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private sub=new Subject<any>()

  public emitter=this.sub.asObservable()
  constructor() { }

  display(meeting){
    this.sub.next(meeting)
  }
}
