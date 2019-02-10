import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'iban'
})
export class IbanPipe implements PipeTransform {

  transform(value: string, args?: any): string {
    return value.split(' ').join('').replace(/(.{4})/g, "$1 ");
  }

}
