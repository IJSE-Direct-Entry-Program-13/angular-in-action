import { Component } from '@angular/core';
import {Record, RecordService} from '../record.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: false,
  template: `
    <form #frmRef class="p-2 text-center" #frm="ngForm"
          (ngSubmit)="saveRecord(frmRef, frm)">
      <div class="mb-2">
        <label for="txt-id">ID</label>
        <input required pattern="^C\\d{3}$"
               #txtId="ngModel"
               [class.is-invalid]="txtId.invalid && txtId.dirty"
          name="id" [(ngModel)]="record.id" placeholder="Eg. C001"
               id="txt-id" class="form-control text-center" type="text">
      </div>
      <div class="mb-2">
        <label for="txt-name">NAME</label>
        <input required pattern="^[A-Za-z ]+$"
               #txtName="ngModel"
               [class.is-invalid]="txtName.invalid && txtName.dirty"
          name="name" [(ngModel)]="record.name" placeholder="Eg. Kasun Sampath"
               id="txt-name" class="form-control text-center" type="text">
      </div>
      <div class="d-flex gap-2 justify-content-center">
        <button class="btn btn-primary">Save</button>
        <button class="btn btn-warning" type="reset">Clear</button>
      </div>
    </form>
  `,
  styleUrl: './form.component.scss'
})
export class FormComponent {

  record: Record = {
    id: '',
    name: ''
  }

  constructor(public recordService: RecordService) {
  }

  saveRecord(frm: HTMLFormElement, ngForm: NgForm) {
    if (ngForm.invalid) {
      const elm = <HTMLInputElement>frm
        .querySelector('.ng-invalid')!;
      elm.focus();
      elm.select();
    }else{
      this.recordService.saveRecord(this.record)
        .subscribe({
          next: val => {
            ngForm.reset();
            (<HTMLInputElement>frm.querySelector('input')!).focus();
          },
          error: err => {
            alert(`Failed to save the record with error: ${err}`);
          }
        });
    }
  }
}
