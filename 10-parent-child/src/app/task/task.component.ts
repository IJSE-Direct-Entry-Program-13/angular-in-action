import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-task',
  standalone: false,
  template: `
<!--    <div class="p-2 d-flex justify-content-between-->
<!--     align-items-center">-->
<!--      <ng-content />-->
        {{text}}
      <button (click)="deleteTask()"
        class="btn btn-outline-danger btn-sm">Remove</button>
<!--    </div>-->
  `,
  styleUrl: './task.component.scss'
})
export class TaskComponent {
  @Input("taskText")
  text = '';
  @Output("delete")
  deleteChange = new EventEmitter<void>();

  deleteTask() {
    this.deleteChange.emit();
  }
}
