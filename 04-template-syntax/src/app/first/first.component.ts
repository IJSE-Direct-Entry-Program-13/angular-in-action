import {Component} from '@angular/core';

@Component({
  selector: 'app-first',
  standalone: false,
  template: `
    <h3>First Component: {{ getValue() }}</h3>
  `,
  styleUrl: './first.component.scss'
})
export class FirstComponent {
  static value = 1;

  getValue() {
    console.log("Working");
    return FirstComponent.value++;
  }
}
