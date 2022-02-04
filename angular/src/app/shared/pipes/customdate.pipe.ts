import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customdate'
})
export class CustomdatePipe implements PipeTransform {
constructor(private dp:DatePipe){

}
  transform(date: any,): unknown {
    return this.dp.transform(date,'dd-MM-yyyy');
  }

}
