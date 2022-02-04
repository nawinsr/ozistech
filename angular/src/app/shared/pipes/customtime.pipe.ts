import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customtime'
})
export class CustomtimePipe implements PipeTransform {

  transform(value: any,): unknown {
    let  dataD=value
    let data= new Date(dataD)
    var hours = data.getHours();
    var minutes:any = data.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  }

}
