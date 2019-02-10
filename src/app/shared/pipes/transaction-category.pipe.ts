import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transactionCategory'
})
export class TransactionCategoryPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
