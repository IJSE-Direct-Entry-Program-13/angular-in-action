import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-template-driven-form',
  standalone: false,
  template: `
    <h1>Template Driven Form</h1>
    <input #txt1 class="form-control" type="text" value="ijse">
    <p class="mt-2">You entered: {{ txt1.value }}</p>
    <hr>
    <input #txt2 class="form-control" type="text"
           [value]="text" (input)="text=txt2.value;log()">
    <p class="mt-2">You entered: {{text}}</p>
    <hr>
    <input type="text" required pattern="^C\\d{3}$"
           class="form-control" [(ngModel)]="text2">
    <p class="mt-2">You entered: {{text2}}</p>
    <hr>
    <form>
      <div class="mb-2">
        <label class="mb-2" for="txt-username">Username</label>
        <input class="form-control" type="text" id="txt-username"
        placeholder="Enter your username here">
      </div>
      <div class="mb-2">
        <label class="mb-2" for="txt-password">Password</label>
        <input class="form-control" type="password" id="txt-password"
               placeholder="Enter your username here">
      </div>
      <div>
        <button class="btn btn-primary">Log In</button>
      </div>
    </form>
  `,
  styleUrl: './template-driven-form.component.scss'
})
export class TemplateDrivenFormComponent {
  text2 = 'ijse';
  text = 'ijse';

  log(){
    console.log(this.text);
  }

  @ViewChild("txt1")
  txtElmRef!: ElementRef<HTMLInputElement>;

  ngAfterViewInit(): void {
    this.txtElmRef.nativeElement.addEventListener('input', () => {
      console.log(this.txtElmRef.nativeElement.value);
    });
  }
}
