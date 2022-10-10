import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(input: string): string {
    console.log(input);
    console.log("substring",input.substring(1));
    input = input.charAt(0).toUpperCase()+input.substring(1).toLowerCase();
    return input;
  }

}
