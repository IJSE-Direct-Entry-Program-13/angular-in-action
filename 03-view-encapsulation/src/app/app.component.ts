import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Angular: Hello View Encapsulation</h1>
    <hr>
    <app-my-new />
  `,
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
}
