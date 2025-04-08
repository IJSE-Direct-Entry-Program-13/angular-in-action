import { Component } from '@angular/core';

@Component({
  selector: 'app-task',
  standalone: false,
  template: `
    <div class="p-2 d-flex justify-content-between
     align-items-center">
      {{text}}
      <button class="btn btn-outline-danger btn-sm">Remove</button>
    </div>
  `,
  styleUrl: './task.component.scss'
})
export class TaskComponent {
  text: string = "Dummy Task";
}
