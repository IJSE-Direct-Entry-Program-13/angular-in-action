import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = '02-template-syntax 123';
  abc = Math;

  getRandom(){
    return Math.random();
  }
}
