import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-task-list',
  standalone: false,
  template: `
    @for (task of taskList; track $index) {
      <!--      <app-task (delete)="deleteTask($index)">{{task}}</app-task>-->
      <app-task [taskText]="task" (delete)="deleteTask($index)"/>
    }
  `,
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent implements OnChanges {

  @Input()
  texts: Observable<string> = new Observable();
  taskList: Array<string> = [];

  ngOnChanges(changes: SimpleChanges): void {
    this.taskList = [];
    this.texts.subscribe(value => {
      this.taskList.push(value);
    });
  }

  deleteTask(index: number){
    this.taskList.splice(index, 1);
  }
}
