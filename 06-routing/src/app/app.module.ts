import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {MainComponent} from './main/main.component';
import {AdminComponent} from './admin/admin.component';
import {GuestComponent} from './guest/guest.component';
import {DashboardComponent} from './admin/dashboard/dashboard.component';
import {DashboardComponent as GuestDashboardComponent} from './guest/dashboard/dashboard.component';
import {ManageClientsComponent} from './admin/manage-clients/manage-clients.component';
import {ManageStockComponent} from './admin/manage-stock/manage-stock.component';
import {ViewClientsComponent} from './guest/view-clients/view-clients.component';
import {ViewStockComponent} from './guest/view-stock/view-stock.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/main'
  },
  {
    path: 'main',
    component: MainComponent
  },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/admin/dashboard'
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'manage-clients',
        component: ManageClientsComponent
      },
      {
        path: 'manage-stocks',
        component: ManageStockComponent
      }
    ]
  },
  {
    path: 'guest',
    component: GuestComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard'
      },
      {
        path: 'dashboard',
        component: GuestDashboardComponent
      },
      {
        path: 'view-clients',
        component: ViewClientsComponent
      },
      {
        path: 'view-stock',
        component: ViewStockComponent
      }]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AdminComponent,
    GuestComponent,
    DashboardComponent,
    ManageClientsComponent,
    ManageStockComponent,
    ViewClientsComponent,
    ViewStockComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
