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
    <p class="mt-2">You entered: {{ text }}</p>
    <hr>
    <input type="text" required pattern="^C\\d{3}$"
           class="form-control" [(ngModel)]="text2">
    <p class="mt-2">You entered: {{ text2 }}</p>
    <hr>
    <form (ngSubmit)="login()" id="frm-login" class="text-center" #frmLogin="ngForm">
      <div class="mb-2">
        <label class="mb-2" for="txt-username">Username</label>
        <input [(ngModel)]="user.username"
               required
               pattern="^\s*[A-Za-z0-9]{3,}\s*$"
               minlength="3"
               name="username"
               #txtUserName="ngModel"
               [class.is-invalid]="txtUserName.dirty && txtUserName.invalid"
               class="form-control text-center"
               type="text" id="txt-username"
               placeholder="Enter your username here">
        <div class="invalid-feedback">
          @if (txtUserName.hasError('minlength')) {
            Username should be at least 3 characters long
          } @else if (txtUserName.hasError('pattern')) {
            Invalid characters detected, username should follow the pattern [A-Za-z0-9]
          } @else {
            Username required
          }
        </div>
      </div>
      <div class="mb-2">
        <label class="mb-2" for="txt-password">Password</label>
        <input [(ngModel)]="user.password"
               required
               pattern="^[A-Za-z0-9!@#$%]{6,}$"
               minlength="6"
               name="password"
               #txtPassword="ngModel"
               [class.is-invalid]="txtPassword.dirty && txtPassword.invalid"
               class="form-control text-center"
               type="password" id="txt-password"
               placeholder="Enter your username here">
        <div class="invalid-feedback">
          @if (txtPassword.hasError('minlength')) {
            Password should be at least 3 characters long
          } @else if (txtPassword.hasError('pattern')) {
            Invalid characters detected, password should follow the pattern [A-Za-z0-9!&#64;#$%]
          } @else {
            Password required
          }
        </div>
      </div>
      <div>
        <button [disabled]="frmLogin.invalid" class="btn btn-primary">Log In</button>
      </div>
    </form>
  `,
  styleUrl: './template-driven-form.component.scss'
})
export class TemplateDrivenFormComponent {

  login(){
    console.log(JSON.stringify(this.user));
  }

  user = {
    username: '',
    password: ''
  }
  // username = "";
  // password = "";
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
