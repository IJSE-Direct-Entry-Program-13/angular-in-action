import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Subject, tap} from 'rxjs';

export type Record = {
  id: string,
  name: string
}

@Injectable()
export class RecordService {
  API_BASE_URL = 'http://localhost:3000/records';
  latestRecords =
    new BehaviorSubject<Record[]>([]);

  constructor(private http: HttpClient) { }

  private fetchRecords(){
    this.http.get<Record[]>(this.API_BASE_URL)
      .subscribe(val => this.latestRecords.next(val));
  }

  getAllRecords(){
    this.fetchRecords();
    return this.latestRecords;
  }

  deleteRecord(id: string){
    return this.http.delete(`${this.API_BASE_URL}/${id}`)
      .pipe(tap(value => this.fetchRecords()));
  }

  saveRecord(record: Record){
    return this.http.post(this.API_BASE_URL, record)
      .pipe(tap(value => this.fetchRecords()))
  }
}
