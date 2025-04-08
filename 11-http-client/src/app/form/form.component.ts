import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  standalone: false,
  template: `
    <form class="p-2 text-center">
      <div class="mb-2">
        <label for="txt-id">ID</label>
        <input placeholder="Eg. C001"
               id="txt-id" class="form-control text-center" type="text">
      </div>
      <div class="mb-2">
        <label for="txt-name">NAME</label>
        <input placeholder="Eg. Kasun Sampath"
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

}
