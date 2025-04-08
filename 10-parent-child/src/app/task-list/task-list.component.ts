import { Component } from '@angular/core';

@Component({
  selector: 'app-task-list',
  standalone: false,
  template: `
    @for(task of taskList; track $index){
<!--      <app-task (delete)="deleteTask($index)">{{task}}</app-task>-->
      <app-task [taskText]="task" (delete)="deleteTask($index)" />
    }
  `,
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent {
  taskList: Array<string> = ['Task 1', 'Task 2'];

  deleteTask(index: number){
    this.taskList.splice(index, 1);
  }
}
