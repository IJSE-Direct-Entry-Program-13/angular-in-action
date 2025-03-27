import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddNewCustomerComponent } from './add-new-customer/add-new-customer.component';

@NgModule({
  declarations: [
    AddNewCustomerComponent
  ],
  exports: [
    AddNewCustomerComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CustomerModule { }
