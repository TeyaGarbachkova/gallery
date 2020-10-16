import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterBestTop'
})
export class FilterBestTopPipe implements PipeTransform {

  transform(values: any[], args?: boolean): any {
    
    if(args == undefined ) {
      return values;
    }

    if(args) {
      var mostLiked = Object.create(values);

      mostLiked.sort(function(a,b) {
          return b.countLikes - a.countLikes;
      });
      return mostLiked.slice(0,3);

    } else {
      return values;
    }

    
  }

}
