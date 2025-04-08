import { Component } from '@angular/core';
import {MyServiceService} from '../service/my-service.service';

@Component({
  selector: 'app-spinner',
  standalone: false,
  template: `
    A number between 0 - 100
    <input class="form-control"
           #ref
           [value]="service.getProgress() | async"
           (input)="service.updateProgress(+ref.value)"
           type="number" min="0" max="100">
  `,
  styleUrl: './spinner.component.scss'
})
export class SpinnerComponent {
  constructor(public service: MyServiceService) {
  }
}
