import { Component } from '@angular/core';

@Component({
  selector: 'app-v-slider',
  standalone: false,
  template: `
    <input type="range" min="0" max="100">
  `,
  styleUrl: './v-slider.component.scss'
})
export class VSliderComponent {

}
