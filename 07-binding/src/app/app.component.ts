import {ChangeDetectorRef, Component, inject, NgZone} from '@angular/core';
import {window} from 'rxjs';

@Component({
  selector: 'app-root',
  template: `
    <h1>Welcome to Angular binding</h1>
    <h2>Event Binding</h2>
    <button (click)="handleClick1($event);handleClick2();alert('okay')">Click Me 1</button>
    <!--    <button (click)="(()=>alert('hello'))()">Click Me 2</button>-->
    <h2>Property Binding</h2>
    <input type="button" [attr.value]="buttonText1 + 10">
    <input type="button" [value]="buttonText1 + 10">
    <input type="button" value="{{buttonText1 + 10}}">
    <button (click)="changeText1()">Change Text</button>
    <h2>Property Assigning</h2>
    <div ngNonBindable>
        <input type="text" value="{{someText}}">
    </div>
    <button (click)="changeText2()">Change Text</button>
    <hr>
    <h1 class="a b c d" >Class Binding</h1>
    <h1 [attr.class]="strClasses" >Class Binding</h1>
    <h1 [className]="strClasses" >Class Binding</h1>
    <button (click)="changeClasses()">Change Classes</button>
    <hr>
    <h1 [class.a]="f1" [class.c]="f2">Rec: Class Binding</h1>
    <h1 [class]="strClasses">Rec: Class Binding</h1>
    <h1 [class]="strClassArray">Rec2: Class Binding</h1>
    <button (click)="updateArray()">Update Array</button>
    <button (click)="toggleFlags()">Toggle Classes</button>
    <hr>
    <h1 [class]="classObj">Crazy</h1>
    <hr>
    <h1 [style.color]="color" [style.border]="'1px solid black'">Style Binding</h1>
    <h1 [style]="styleStr">Style Binding</h1>
    <h1 [style]="styleObj">Style Binding</h1>
    <h1 style="color: green;border: 1px solid black">Style Binding</h1>
    <router-outlet/>
  `,
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  styleStr = 'color: blue; border: 1px solid red';
  styleObj = {
      fontSize: '20px',
      border: '1px solid red'
  };
  color = 'blue';
  classObj = {
      a: true,
      b: false,
      c: false,
      d: true
  };
  updateArray(){
    this.strClassArray = [ 'c', 'd'];
  }
  strClassArray = ['a', 'c', 'd'];
  f1 = true;
  f2 = true;
  toggleFlags(){
    this.f1 = !this.f1;
    this.f2 = !this.f2;
  }

  changeClasses(){
    this.strClasses = 'a b';
  }

  strClasses = 'a b c d';
  someText = 'hello';
  buttonText1 = 'hello';
  zone = inject(NgZone);
  //cd = inject(ChangeDetectorRef);

  changeText2() {
    //this.cd.detectChanges();
    this.zone.runOutsideAngular(()=>{
      //this.someText = Math.random() + "";
    });
  }

  changeText1() {
    this.buttonText1 = 'abc';
  }

  alert(str: string) {

  }

  handleClick1(event: MouseEvent) {
    console.log(event)
    alert("Click 1");
  }

  handleClick2() {
    alert("Click 2");
  }
}
