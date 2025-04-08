import { Component } from '@angular/core';

@Component({
  selector: 'app-spinner',
  standalone: false,
  template: `
    A number between 0 - 100
    <input class="form-control" type="number" min="0" max="100">
  `,
  styleUrl: './spinner.component.scss'
})
export class SpinnerComponent {

}
