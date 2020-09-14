import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterCharacter'
})
export class FilterCharacterPipe implements PipeTransform {

  transform(values: any[], args?: any): any {
    console.log(values)
    if(args == undefined) {
      return values;
    }

    
  }

}
