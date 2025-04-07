import { Component } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  standalone: false,
  template: `
    <h3>Template Driven Forms (Forms Module)</h3>
    <input type="text" class="form-control" [(ngModel)]="text">
    <p>You entered: {{ text }}</p>
    <h3>Reactive Forms (Reactive Forms Module)</h3>
    <input type="text" class="form-control" [formControl]="txt">
    <p>You entered: {{ txt.value }}</p>
    <hr>
    <h3 class="text-center">Customer Form</h3>
    <form (ngSubmit)="saveCustomer()" class="text-center" [formGroup]="frmCustomer">
      <div class="mb-2">
        <label for="txt-id" class="mb-1 fw-bolder">Customer ID</label>
        <input type="text" id="txt-id"
               formControlName="id"
               class="form-control text-center"
               placeholder="Eg. C001">
      </div>
      <div class="mb-2">
        <label for="txt-name" class="mb-1 fw-bolder">Customer Name</label>
        <input type="text" id="txt-name"
               formControlName="name"
               class="form-control text-center"
               placeholder="Eg. Kasun Sampath">
      </div>
      <div class="mb-2">
        <label for="txt-address" class="mb-1 fw-bolder">Customer Address</label>
        <input type="text" id="txt-address"
               formControlName="address"
               class="form-control text-center"
               placeholder="Eg. Galle Road, Panadura">
      </div>
      <div class="mb-2">
        <label for="txt-contact" class="mb-1 fw-bolder">Customer Contact</label>
        <input type="text" id="txt-contact"
               formControlName="contact"
               class="form-control text-center"
               placeholder="Eg. 011-1234567">
      </div>
      <div class="d-flex gap-2 justify-content-center">
        <button class="btn btn-primary">Save</button>
        <button class="btn btn-warning" type="reset">Reset</button>
      </div>
    </form>
  `,
  styleUrl: './reactive-form.component.scss'
})
export class ReactiveFormComponent {

  saveCustomer(){
    console.log(this.frmCustomer.getRawValue());
  }

  text = "ijse";
  txt = new FormControl('ijse');

  frmCustomer = new FormGroup({
    id : new FormControl(''),
    name : new FormControl(''),
    address : new FormControl(''),
    contact : new FormControl('')
  });

}
