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
import {AppRoutingModule} from './app-routing.module';

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
    // RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
