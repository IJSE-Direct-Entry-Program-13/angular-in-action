import {Component, inject} from '@angular/core';
import {MyServiceService} from '../service/my-service.service';

@Component({
  selector: 'app-progress-wrapper',
  standalone: false,
  template: `
    <div
      [style.border-radius]="((service.getProgress() | async)! / 2) + '%'"
      class="border bg-primary-subtle d-flex
    justify-content-center align-items-center"
         style="height: 250px; width: 250px;">
        <app-progress-bar />
    </div>
  `,
  styleUrl: './progress-wrapper.component.scss'
})
export class ProgressWrapperComponent {
  service = inject(MyServiceService);
  // constructor(public service: MyServiceService) {
  // }
}
