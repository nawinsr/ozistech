import { Pipe, PipeTransform } from '@angular/core';


@Pipe({name: 'split'})
export class SplitPipe implements PipeTransform {
  transform(val:any ,args?:any) {
    if(!val) {
      return;
    }
    var formattedString = val.split(",").join(",\n")
     return formattedString
  }
}
