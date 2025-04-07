import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  standalone: false,
  template: `
    <h1>Component Life Cycle</h1>
    <input #ref type="checkbox" [checked]="flag" (change)="flag = !flag">
    {{ flag ? 'Hide': 'Show' }}
    @if (flag) {
      <app-wrapper>
        <body>This is my body</body>
        <header #ref>This is my title</header>
        <div>This is my footer</div>
        <div>This is my footer</div>
        <div>This is my footer</div>
      </app-wrapper>
    }
  `,
  styleUrl: './life-cycle.component.scss'
})
export class LifeCycleComponent {
  flag = true;
}
