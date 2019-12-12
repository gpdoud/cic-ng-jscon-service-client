import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from '../employee/employee';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(arr: Employee[], srch: string): Employee[] {
    if(srch === '') return arr;
    srch = srch.toLowerCase();
    let emps: Employee[] = [];
    for(let e of arr) {
      if(
        e.id.toString().includes(srch) ||
        e.username.toLowerCase().includes(srch) ||
        e.name.toLowerCase().includes(srch) ||
        e.address.toLowerCase().includes(srch) ||
        e.city.toLowerCase().includes(srch) ||
        e.stateCode.toLowerCase().includes(srch) ||
        e.zip.toLowerCase().includes(srch) ||
        e.ptoDays.toString().includes(srch) ||
        e.salary.toString().includes(srch)
      ) {
        emps.push(e);
      }
    }
    return emps;
  }

}
