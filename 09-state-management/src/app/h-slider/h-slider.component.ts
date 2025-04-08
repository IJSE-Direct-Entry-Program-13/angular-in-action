import { Component } from '@angular/core';

@Component({
  selector: 'app-h-slider',
  standalone: false,
  template: `
    <input type="range" min="0" max="100">
  `,
  styleUrl: './h-slider.component.scss'
})
export class HSliderComponent {

}
