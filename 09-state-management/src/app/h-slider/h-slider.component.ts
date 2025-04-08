import { Component } from '@angular/core';
import {MyServiceService} from '../service/my-service.service';

@Component({
  selector: 'app-h-slider',
  standalone: false,
  template: `
    <input type="range" min="0" max="100"
           [value]="service.getProgress()">
  `,
  styleUrl: './h-slider.component.scss'
})
export class HSliderComponent {
  constructor(public service: MyServiceService) {
  }
}
