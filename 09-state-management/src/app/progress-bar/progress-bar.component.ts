import { Component } from '@angular/core';
import {MyServiceService} from '../service/my-service.service';

@Component({
  selector: 'app-progress-bar',
  standalone: false,
  template: `
    <div>
      <div id="bar"
           [style.width]="(service.getProgress() | async) + '%'"></div>
    </div>
  `,
  styleUrl: './progress-bar.component.scss'
})
export class ProgressBarComponent {
  constructor(public service: MyServiceService) {
  }
}
