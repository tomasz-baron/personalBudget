import { Pipe, PipeTransform } from '@angular/core';
import { Store } from '@ngrx/store';
import * as AppReducers from '../../store/app.reducers';
import { DictionaryState } from 'src/app/store/reducers/dictionary.reducers';
import { map } from 'rxjs/operators';
import { ShortAccount } from '../model';
import { Observable } from 'rxjs';

@Pipe({
  name: 'accountName'
})
export class AccountNamePipe implements PipeTransform {

  constructor(private store: Store<AppReducers.AppState>) { }

  transform(value: string): Observable<string> {
    return this.store.select('dictionaries').pipe(
      map((data: DictionaryState) => data.accounts),
      map((accounts: ShortAccount[]) => {
        if (value) {
          const acc: ShortAccount = accounts.find((account: ShortAccount) => account.id === value);
          return acc.name;
        } else {
          return '-';
        }
      })
    )
  }
}
