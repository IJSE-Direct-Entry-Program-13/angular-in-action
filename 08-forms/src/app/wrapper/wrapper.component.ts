import {Component, ContentChild, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-wrapper',
  standalone: false,
  template: `
    <h1 #ref><ng-content select="header"/></h1>
    <p>
      <ng-content select="body"/>
    </p>
    <p><ng-content /></p>
  `,
  styleUrl: './wrapper.component.scss'
})
export class WrapperComponent {
  @ContentChild("ref")
  ref1!: ElementRef;
  @ViewChild("ref")
  ref2!: ElementRef;

  constructor() {
    console.log("Constructor");
    console.log(this.ref1);
    console.log(this.ref2);
    console.log("============")
  }

  ngOnInit(){
    console.log("ngOnInit");
    console.log(this.ref1);
    console.log(this.ref2);
    console.log("============")
  }

  ngAfterContentInit(){
    console.log("ngAfterContentInit");
    console.log(this.ref1);
    console.log(this.ref2);
    console.log("============")
  }

  ngAfterViewInit(){
    console.log("ngAfterViewInit");
    console.log(this.ref1);
    console.log(this.ref2);
    console.log("============")
  }
}
