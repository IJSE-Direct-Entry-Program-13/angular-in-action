import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Angular: Template Syntax</h1>
    <hr>
    <app-second/>
    <hr>
    <app-last/>
    <!--    <h3 class="abc">Text Interpolation</h3>-->
    <!--    <p>10 + 15 = {{ 10 + 15 }}</p>-->
    <!--    <p>Random Value = {{ getRandom() }}</p>-->
    <!--    <p>Random Value = {{ Math123.random() }}</p>-->
    <!--    <p>PI Value = {{ Math123.PI }}</p>-->
    <!--    <hr>-->
    <!--    <app-first/>-->
    <!--    <app-first/>-->
    <!--    <app-first/>-->
    <!--    <hr>-->
    <!--    @if (false){-->
    <!--      <h1>I am false 1</h1>-->
    <!--    }@else if (true){-->
    <!--      <h1>I am false 2</h1>-->
    <!--    }@else{-->
    <!--      <h1>I am true</h1>-->
    <!--    }-->
    <!--    <hr>-->
    <!--    @if (true) {-->
    <!--      <h1>Hi 1!</h1>-->
    <!--    }-->
    <!--    <h1 *ngIf="true">Hi 2!</h1>-->
  `,
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  Math123 = Math;

  getRandom() {
    return Math.random();
  }
}
