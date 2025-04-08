import { Component } from '@angular/core';

@Component({
  selector: 'app-progress-wrapper',
  standalone: false,
  template: `
    <div class="border bg-primary-subtle d-flex
    justify-content-center align-items-center"
         style="height: 250px; width: 250px;">

    </div>
  `,
  styleUrl: './progress-wrapper.component.scss'
})
export class ProgressWrapperComponent {

}
