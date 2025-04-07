import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit, ChangeDetectorRef,
  Component,
  DoCheck,
  ElementRef,
  OnChanges,
  OnDestroy,
  OnInit, Renderer2,
  SimpleChanges,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'app-template-driven-form',
  standalone: false,
  template: `
    <h1>Template Driven Form</h1>
    <input #txt1 class="form-control" type="text" value="ijse">
    <p class="mt-2">You entered: {{ txt1.value }}</p>
  `,
  styleUrl: './template-driven-form.component.scss'
})
export class TemplateDrivenFormComponent implements OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {

  constructor() {
    console.log("1. Constructor");
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("2. OnChanges");
  }

  ngOnInit(): void {
    console.log(this.txtElmRef);
    console.log("3. OnInit");
  }

  ngDoCheck(): void {
    console.log("4. DoCheck");
  }

  ngAfterContentInit(): void {
    console.log(this.txtElmRef);
    console.log("5. After Content Init");
  }

  ngAfterContentChecked(): void {
    console.log("6. After Content Checked");
  }

  ngAfterViewInit(): void {
    console.log("7. After View Init");
    this.txtElmRef.nativeElement.addEventListener('input', () => {
      console.log(this.txtElmRef.nativeElement.value);
    });
  }

  ngAfterViewChecked(): void {
    console.log("8. After View Checked")
  }

  ngOnDestroy(): void {
    console.log("9. Destroy");
  }

  @ViewChild("txt1")
  txtElmRef!: ElementRef<HTMLInputElement>;
}
