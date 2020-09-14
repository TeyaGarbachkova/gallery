import { Directive } from '@angular/core';
import { Validator, AbstractControl, ValidationErrors, NG_VALIDATORS } from '@angular/forms';
import { passwordMatch } from './validator';

@Directive({
  selector: '[appValidators][ngModel]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: ValidatorsDirective,
      multi: true
    }
  ]
})
export class ValidatorsDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors {
    return passwordMatch(control);
  }
  constructor() { }

}
