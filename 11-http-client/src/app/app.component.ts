import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1 class="p-2 text-center">Welcome to Angular Http Client!</h1>
    <app-form />
  `,
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {

}
