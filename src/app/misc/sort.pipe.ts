import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(arr: any[], prop: string = "id", order: string = "asc"): any[] {
    if(arr == null) return arr;
    
    let sortFn = (a, b) => {
      let x = (typeof a[prop]) == "string" ? a[prop].toString().toLowerCase() : a[prop];
      let y = (typeof b[prop]) == "string" ? b[prop].toString().toLowerCase() : b[prop];
      if(x === y) return 0;
      if(order == "asc") {
        return x < y ? -1 : 1;
      } else {
        return x > y ? -1 : 1;
      }
    }
    
    let sorted = arr.sort(sortFn);
    return sorted;
  }

}
