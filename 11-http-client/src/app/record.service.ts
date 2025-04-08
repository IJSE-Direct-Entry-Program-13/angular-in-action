import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

export type Record = {
  id: string,
  name: string
}

@Injectable()
export class RecordService {
  API_BASE_URL = 'http://localhost:3000/records';

  constructor(private http: HttpClient) { }

  getAllRecords(){
    return this.http.get<Record[]>(this.API_BASE_URL);
  }
}
