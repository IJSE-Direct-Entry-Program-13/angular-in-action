import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Angular: Template Syntax</h1>
    <hr>
    <select [(ngModel)]="date">
      <option value="monday">Monday</option>
      <option value="tuesday">Tuesday</option>
      <option value="wednesday">Wednesday</option>
      <option value="thursday">Thursday</option>
      <option value="friday">Friday</option>
      <option value="saturday">Saturday</option>
      <option value="sunday">Sunday</option>
    </select>
    <h2>Selected date: {{ date | titlecase}}</h2>
    @switch (date){
      @case ('mon' + 'day'){
        <h1>Monday: Oh god! Five more days to suffer</h1>
      }@case (getTuesday()){
        <h1>Tuesday: Another frustrating day</h1>
      }@case ('wednesday'){
        <h1>Wednesday: Is earth spinning? Why is it so slow?</h1>
      }@case ('thursday'){
        <h1>Thursday: C'mon can't help till tomorrow</h1>
      }@case ('friday'){
        <h1>Friday: Finally, time to relax</h1>
      }@default {
        <h1>Weekend: It is party time</h1>
        <h1>Weekend: It is fun</h1>
      }
    }
    <hr>
    <ng-container [ngSwitch]="date">
      <h1 *ngSwitchCase="'monday'">Monday: Oh god! Five more days to suffer</h1>
      <h1 *ngSwitchCase="getTuesday()">Tuesday: Another frustrating day</h1>
      <h1 *ngSwitchCase="'wed' + 'nesday'">Wednesday: Is earth spinning? Why is it so slow?</h1>
      <h1 *ngSwitchCase="'thursday'">Thursday: C'mon can't help till tomorrow</h1>
      <h1 *ngSwitchCase="'friday'">Friday: Finally, time to relax</h1>
<!--      <h1 *ngSwitchDefault>Weekend: It is party time</h1>-->
<!--      <h1 *ngSwitchDefault>Weekend: It is party time</h1>-->
      <ng-container *ngSwitchDefault>
        <h1>Weekend: It is party time</h1>
        <h1>Weekend: It is fun</h1>
      </ng-container>
    </ng-container>
    <hr>
    <app-loop />
  `,
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  date = 'sunday';
  getTuesday(){
    return 'tuesday';
  }
}
