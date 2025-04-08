import { Component } from '@angular/core';
import {Observable, Subject, Subscriber} from 'rxjs';

@Component({
  selector: 'app-root',
  template: `
    <h1 class="p-2 text-center">Welcome to Parent-Child Interaction in Angular</h1>
    <div class="d-flex gap-2 p-2">
      <input #ref type="text" class="form-control"
      placeholder="Eg. Add New Task">
      <button (click)="addTask(ref)" class="btn btn-primary">ADD</button>
    </div>
    <div class="p-2">
      <app-task-list [texts]="taskTexts" />
    </div>
  `,
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {

  taskTexts = new Subject<string>();

  addTask(ref: HTMLInputElement) {
    if (!ref.value.trim().length) {
      ref.select();
      ref.focus();
      return;
    }
    this.taskTexts.next(ref.value);
    ref.value = '';
    ref.focus();
  }
}
