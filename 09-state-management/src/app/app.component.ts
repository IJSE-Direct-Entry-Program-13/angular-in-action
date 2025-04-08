import { Component } from '@angular/core';
import {MyServiceService} from './service/my-service.service';

@Component({
  selector: 'app-root',
  template: `
    <h1 class="p-2 text-center">Welcome to Angular State Management</h1>
    <div class="d-flex p-2 justify-content-between align-items-center">
        <app-spinner />
        <h1 class="flex-grow-1 text-center">
          {{ 'Progress' | uppercase }}:
          {{service.getProgress() | async}}%
        </h1>
    </div>
    <div class="p-2">
        <app-h-slider />
        <app-v-slider />
    </div>
    <div class="d-flex p-2 justify-content-center mt-5 pt-5">
      <app-progress-wrapper />
    </div>
  `,
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {

  constructor(public service: MyServiceService) {
  }
}
