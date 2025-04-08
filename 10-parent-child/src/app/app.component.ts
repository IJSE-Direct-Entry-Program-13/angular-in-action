import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1 class="p-2 text-center">Welcome to Parent-Child Interaction in Angular</h1>
    <div class="d-flex gap-2 p-2">
      <input type="text" class="form-control"
      placeholder="Eg. Add New Task">
      <button class="btn btn-primary">ADD</button>
    </div>
    <div class="p-2">
      <app-task-list/>
    </div>
  `,
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
