import { Injectable } from '@angular/core';

@Injectable()
export class MyServiceService {

  constructor() { }

  getProgress(): number {
    return 10;
  }
}
