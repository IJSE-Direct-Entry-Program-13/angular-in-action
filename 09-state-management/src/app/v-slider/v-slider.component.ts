import { Component } from '@angular/core';
import {MyServiceService} from '../service/my-service.service';

@Component({
  selector: 'app-v-slider',
  standalone: false,
  template: `
    <input type="range" min="0" max="100" #ref
           (input)="service.updateProgress(+ref.value)"
    [value]="service.getProgress() | async">
  `,
  styleUrl: './v-slider.component.scss'
})
export class VSliderComponent {
  constructor(public service: MyServiceService) {
  }
}
