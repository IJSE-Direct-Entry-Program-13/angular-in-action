import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';

@Injectable()
export class MyServiceService {

  subject = new BehaviorSubject(10);

  updateProgress(progress: number){
    this.subject.next(progress);
  }

  getProgress(): Subject<number> {
    return this.subject;
  }
}
