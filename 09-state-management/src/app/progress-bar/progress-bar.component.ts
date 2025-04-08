import { Component } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  standalone: false,
  template: `
    <div>
      <div id="bar"></div>
    </div>
  `,
  styleUrl: './progress-bar.component.scss'
})
export class ProgressBarComponent {

}
