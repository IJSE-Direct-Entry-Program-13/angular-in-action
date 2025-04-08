import {Component, ElementRef, ViewChild} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {notBlank} from '../not-blank.directive';

type Customer = {
  id: string,
  name: string,
  address: string,
  contacts: string[]
};

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
    <form #frm (ngSubmit)="saveCustomer()" class="text-center" [formGroup]="frmCustomer">
      <div class="mb-2">
        <label for="txt-id" class="mb-1 fw-bolder">Customer ID</label>
        <input type="text" id="txt-id"
               formControlName="id"
               [class.is-invalid]="isInvalid('id')"
               class="form-control text-center"
               placeholder="Eg. C001">
      </div>
      <div class="mb-2">
        <label for="txt-name" class="mb-1 fw-bolder">Customer Name</label>
        <input type="text" id="txt-name"
               formControlName="name"
               [class.is-invalid]="isInvalid('name')"
               class="form-control text-center"
               placeholder="Eg. Kasun Sampath">
      </div>
      <div class="mb-2">
        <label for="txt-address" class="mb-1 fw-bolder">Customer Address</label>
        <input type="text" id="txt-address"
               formControlName="address"
               [class.is-invalid]="isInvalid('address')"
               class="form-control text-center"
               placeholder="Eg. Galle Road, Panadura">
      </div>
      <div formArrayName="contacts">

        @for(contact of getContacts().controls;track $index){
          <div class="mb-2">
            <label for="txt-contact" class="mb-1 fw-bolder">Customer Contact</label>
            <input type="text" id="txt-contact"
                   [formControlName]="$index"
                   [class.is-invalid]="isInvalid(['contacts',$index])"
                   class="form-control text-center"
                   placeholder="Eg. 011-1234567">
            @if($last){
                <button type="button" (click)="addContact()">+</button>
            }
          </div>
        }

      </div>
      <div class="d-flex gap-2 justify-content-center">
        <button class="btn btn-primary">Save</button>
        <button class="btn btn-warning" type="reset">Reset</button>
      </div>
    </form>
    <table class="table mt-2 table-hover table-responsive">
      <thead>
      <tr>
        <th>ID</th>
        <th>NAME</th>
        <th>ADDRESS</th>
        <th>CONTACT</th>
        <th>DELETE</th>
      </tr>
      </thead>
      <tbody>
        @for (customer of customerList; track $index) {
          <tr>
            <td>{{ customer.id }}</td>
            <td>{{ customer.name }}</td>
            <td>{{ customer.address }}</td>
            <td>{{ customer.contacts }}</td>
            <td>
              <button (click)="deleteCustomer(customer)">DELETE</button>
            </td>
          </tr>
        }
      </tbody>
      <tfoot *ngIf="!customerList.length">
      <tr>
        <td colspan="5" class="text-center">No customers found</td>
      </tr>
      </tfoot>
    </table>
  `,
  styleUrl: './reactive-form.component.scss'
})
export class ReactiveFormComponent {


  @ViewChild("frm")
  frmElmRef!: ElementRef<HTMLFormElement>
  customerList: Customer[] = [];
  // customerList: Array<Customer> = [];
  text = "ijse";
  txt = new FormControl('ijse');

  // frmCustomer = new FormGroup({
  //   id: new FormControl('', [Validators.required,
  //     Validators.pattern(/^C\d{3}$/)]),
  //   name: new FormControl('', [Validators.required,
  //     Validators.pattern(/[A-Za-z ]+/)]),
  //   address: new FormControl('', [Validators.required,
  //     Validators.minLength(4)]),
  //   contact: new FormControl('', [Validators.required,
  //     Validators.pattern(/^\d{3}-\d{7}$/)])
  // });

  frmCustomer!: FormGroup;

  constructor(private fb: FormBuilder) {
    const {required, pattern, minLength} = Validators;
    this.frmCustomer = fb.group({
      id: ['', [required, pattern(/^C\d{3}$/)]],
      name: ['', [required, pattern(/[A-Za-z ]+/)]],
      address: ['', [notBlank(), minLength(4)]],
      contacts: fb.array([
        ['', [notBlank(), pattern(/^\d{3}-\d{7}$/)]],
        ['', [notBlank(), pattern(/^\d{3}-\d{7}$/)]]
      ]),
    })
  }

  getContacts(){
    return this.frmCustomer.get('contacts') as FormArray;
  }

  saveCustomer() {
    if (this.frmCustomer.valid) {
      console.log(this.frmCustomer.getRawValue());
      this.customerList.push(<Customer>this.frmCustomer
        .getRawValue());
      this.frmCustomer.reset();
    } else {
      this.frmCustomer.markAllAsTouched();
      const elm = (<HTMLInputElement>this.frmElmRef.nativeElement
        .querySelector('.ng-invalid')!);
      elm.focus();
      elm.select();
    }
  }

  isInvalid(controlName: string | Array<string|number>): boolean {
    const ctrl = this.frmCustomer
      .get(controlName)!;
    return ctrl.invalid && ctrl.touched;
  }

  // fb = inject(FormBuilder);

  deleteCustomer(customer: Customer) {
    const index = this.customerList.indexOf(customer);
    this.customerList.splice(index, 1);
  }

  addContact() {
    this.getContacts().push(
      this.fb.control('', [notBlank(),
        Validators.pattern(/^\d{3}-\d{7}$/)])
    );
  }
}
