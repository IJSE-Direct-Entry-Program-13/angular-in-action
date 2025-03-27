import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  standalone: false,
  template: `
    <div class="flex h-screen">
      <aside class="p-3">
        <h1 class="font-bold text-2xl border-b">Admin Panel</h1>
        <menu class="pt-2">
          <li class="p-2 rounded cursor-pointer
           hover:bg-gray-200 hover:text-black active:bg-gray-400 active:text-white"
          routerLink="dashboard"
              routerLinkActive="bg-gray-300 text-black">
            🏠 Dashboard</li>
          <li class="p-2 rounded cursor-pointer
           hover:bg-gray-200 hover:text-black active:bg-gray-400 active:text-white"
          routerLink="manage-clients"
              routerLinkActive="bg-gray-300 text-black">
            👫 Manage Clients</li>
          <li class="p-2 rounded cursor-pointer
           hover:bg-gray-200 hover:text-black active:bg-gray-400 active:text-white"
          routerLink="/admin/manage-stocks"
              routerLinkActive="bg-gray-300 text-black">
            💴 Manage Stock</li>
          <li class="p-2 rounded cursor-pointer
           hover:bg-gray-200 hover:text-black active:bg-gray-400 active:text-white"
            routerLink="/main"
              routerLinkActive="bg-gray-300 text-black">
            🔓 Log Out</li>
        </menu>
      </aside>
      <main class="border-l border-l-gray-400 grow p-3">
        <router-outlet/>
      </main>
    </div>
  `,
  styleUrl: './admin.component.scss'
})
export class AdminComponent {

}
