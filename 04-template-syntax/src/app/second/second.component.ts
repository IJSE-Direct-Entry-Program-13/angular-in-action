import { Component } from '@angular/core';

@Component({
  selector: 'app-second',
  standalone: false,
  template: `
    <h1>Simple Conditional Rendering</h1>
    <hr>
    <button (click)="flag = !flag">Show/Hide</button>
    <h1 *ngIf="flag">I am h1-1</h1>
    @if (flag) {
      <h1>I am h1-2</h1>
    }
  `,
  styleUrl: './second.component.scss'
})
export class SecondComponent {
  flag = true;
}
