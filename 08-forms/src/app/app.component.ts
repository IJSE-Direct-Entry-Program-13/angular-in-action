import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1 class="p-2">Welcome to Angular Forms!</h1>
    <ul>
    <li><a href="#" routerLink="/life-cycle">Component Life Cycle</a></li>
    <li><a href="#" routerLink="/template-driven-form">Template Driven Form</a></li>
    <li><a href="#" routerLink="/reactive-form">Reactive Form</a></li>
    <li>Template Driven Form Validation</li>
    <li>Reactive Form Validation</li>
    </ul>
    <main class="p-2 border-top">
        <router-outlet />
    </main>
  `,
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
