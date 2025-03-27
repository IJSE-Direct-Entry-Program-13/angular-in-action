import { Component } from '@angular/core';

@Component({
  selector: 'app-last',
  standalone: false,
  template: `
    <h1>Complex Conditional Rendering</h1>
    <label><input type="checkbox" [(ngModel)]="flag1"> Flag 1</label>
    <label><input type="checkbox" [(ngModel)]="flag2"> Flag 2</label>
    @if(flag1){
      <h1>Flag1: true</h1>
      <h1 *ngIf="flag2">Flag2: true</h1>
    }@else if(flag2){
      <h1>Flag2: true</h1>
    }@else{
      <h1>No Flags</h1>
    }
  `,
  styleUrl: './last.component.scss'
})
export class LastComponent {
  flag1 = true;
  flag2 = true;
}
