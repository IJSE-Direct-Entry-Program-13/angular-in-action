import { Component } from '@angular/core';

@Component({
  selector: 'app-guest',
  standalone: false,
  template: `
    <header class="border-b border-b-gray-300 px-2">
      <menu class="flex justify-between">
        <li routerLinkActive="border-b-sky-500!" routerLink="/guest/dashboard" class="p-2 cursor-pointer border-b border-b-transparent
hover:border-b hover:border-b-sky-500">Dashboard</li>
        <li routerLinkActive="border-b-sky-500!" routerLink="view-clients" class="p-2 cursor-pointer border-b border-b-transparent
hover:border-b hover:border-b-sky-500">View Clients</li>
        <li routerLinkActive="border-b-sky-500!" routerLink="view-stock" class="p-2 cursor-pointer border-b border-b-transparent
hover:border-b hover:border-b-sky-500">View Stock</li>
        <li routerLinkActive="border-b-sky-500!" routerLink="/main" class="p-2 cursor-pointer border-b border-b-transparent
hover:border-b hover:border-b-sky-500">Log Out</li>
      </menu>
    </header>
    <main class="p-3">
      <router-outlet />
    </main>
  `,
  styleUrl: './guest.component.scss'
})
export class GuestComponent {

}
