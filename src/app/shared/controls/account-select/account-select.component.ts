import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import { ShortAccount } from '../../model';
import { AppState } from 'src/app/store/app.reducers';
import { DictionaryState } from 'src/app/store/reducers/dictionary.reducers';

@Component({
  selector: '[appAccountSelect]',
  templateUrl: './account-select.component.html',
  styleUrls: ['./account-select.component.scss']
})
export class AccountSelectComponent implements OnInit {
  @Input()
  placeholder: string;

  @Input()
  formControlName: string

  public accounts$: Observable<ShortAccount[]>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.accounts$ = this.store.select('dictionaries').pipe(
      map((data: DictionaryState) => data.accounts)
    );
  }

}
