import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterLetter'
})
export class FilterLetterPipe implements PipeTransform {

  transform(values: any[], args?: any): any {

    if(args == undefined) {
      return values;
    }

    return values.filter((name) => name.letter == args);
  }

}
