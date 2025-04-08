import { Component } from '@angular/core';
import {MyServiceService} from '../service/my-service.service';

@Component({
  selector: 'app-spinner',
  standalone: false,
  template: `
    A number between 0 - 100
    <input class="form-control" [value]="service.getProgress()"
           type="number" min="0" max="100">
  `,
  styleUrl: './spinner.component.scss'
})
export class SpinnerComponent {
  constructor(public service: MyServiceService) {
  }
}
