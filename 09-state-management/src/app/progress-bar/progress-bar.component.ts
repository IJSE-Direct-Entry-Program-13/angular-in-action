import { Component } from '@angular/core';
import {MyServiceService} from '../service/my-service.service';

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
  constructor(private service: MyServiceService) {
  }
}
