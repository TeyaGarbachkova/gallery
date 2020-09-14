import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterBest'
})
export class FilterBestPipe implements PipeTransform {

  transform(values: any[], args?: any): any {
    if(args == undefined) {
      return values;
    }
   
    var mostLiked = values;
    
    mostLiked.sort(function(a,b) {
        return b.countLikes - a.countLikes;
    });

    return mostLiked;
  }

}
