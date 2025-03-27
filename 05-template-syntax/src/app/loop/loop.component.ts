import { Component } from '@angular/core';
import {first} from 'rxjs';

@Component({
  selector: 'app-loop',
  standalone: false,
  template: `
    <h1>For Loop</h1>
    @for (name of ['Kasun', 'Nuwan', 'Ruwan', 'Supun', 'Upul'];
      track $index;
      let c = $count,
        f = $first, l = $last, o = $odd, e = $even) {
      <h1>{{ $index }}. Hello {{ name }}</h1>
      @if (l) {
        <h1>Total Names: {{ c }}</h1>
      }
    }@empty {
      <h1>No Names Found</h1>
    }
    <hr>
    <ng-container
      *ngFor="let name of ['Kasun', 'Nuwan', 'Ruwan', 'Supun', 'Upul']
      ;index as i;count as c; last as l">
      <h1>{{i}}. Hello {{name}}</h1>
      @if(l){
        <h1>Total Names: {{ c }}</h1>
      }
    </ng-container>
  `,
  styleUrl: './loop.component.scss'
})
export class LoopComponent {
}
