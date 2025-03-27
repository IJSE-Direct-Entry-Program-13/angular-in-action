import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  standalone: false,
  template: `
    <main class="flex justify-around h-screen items-center">
      <div class="p-8 border cursor-pointer rounded
           hover:bg-sky-400 hover:border-sky-800
            active:bg-sky-700 active:text-white"
            routerLink="/admin">Admin
      </div>
      <div class="p-8 border cursor-pointer rounded
           hover:bg-sky-400 hover:border-sky-800
            active:bg-sky-700 active:text-white"
            routerLink="/guest">Guest
      </div>
    </main>
  `,
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
