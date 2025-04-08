import {Directive} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn} from '@angular/forms';

@Directive({
  selector: '[notBlank]',
  standalone: false,
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: NotBlankDirective,
      multi: true
    }
  ]
})
export class NotBlankDirective implements Validator {

  constructor() {
  }

  validate(control: AbstractControl): ValidationErrors | null {
    return notBlank()(control);
  }

}

export function notBlank(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (control.value?.trim().length){
      return null;
    }else{
      return { notBlank: false }
    }
  }
}
