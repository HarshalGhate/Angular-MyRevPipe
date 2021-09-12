import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myRev'
})
export class MyRevPipe implements PipeTransform {

  transform(str:string):string
  {
    let temp:string = "";
    for (var i=str.length-1; i>=0;i--)
    {
        temp =temp + str[i];
    }
    return temp;
  }
  

}
