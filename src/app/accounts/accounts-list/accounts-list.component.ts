import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { EditAccountComponent } from '../edit-account/edit-account.component';
import { Account, AccountTypes } from 'src/app/shared/model';
import * as AppReducers from '../../store/app.reducers';
import { map, distinct } from 'rxjs/operators';
import { AccountState } from '../../store/reducers/account.reducers';
import { Observable, Subject, Subscription } from 'rxjs';
import * as AccountActions from '../../store/actions/account.actions';
import { DictionaryState } from '../../store/reducers/dictionary.reducers';


@Component({
  selector: 'app-accounts-list',
  templateUrl: './accounts-list.component.html',
  styleUrls: ['./accounts-list.component.scss']
})
export class AccountsListComponent implements OnInit, OnDestroy {
  accountsList$: Observable<Account[]>;
  searchSubscription: Subscription;
  accountTypes$: Observable<AccountTypes[]>;

  filters$: Subject<any> = new Subject();

  constructor(private dialog: MatDialog, private store: Store<AppReducers.AppState>) { }

  ngOnInit() {
    this.searchSubscription = this.filters$.subscribe((type) => {
      this.store.dispatch(new AccountActions.GetAccounts(type));
    });
    
    this.accountsList$ = this.store.select('accounts').pipe(
      map((data: AccountState) => data.accounts),
      distinct()
    );
    this.accountTypes$ = this.store.select('dictionaries').pipe(
      map((data: DictionaryState) => data.accountTypes)
    );
  }

  ngOnDestroy() {
    this.searchSubscription.unsubscribe();
  }

  public openForm(editMode?: boolean): void {
    const dialogRef = this.dialog.open(EditAccountComponent, {disableClose: true, data: { editMode }});
    
    dialogRef.afterClosed().subscribe(() => {
      this.store.dispatch(new AccountActions.UnselectAccount());
      this.filters$.next('');
    });
  }

  public onSelectAccount(account: Account): void {
    this.store.dispatch(new AccountActions.SelectAccount(account));
    this.openForm(true);
  }

  public onToggleAccount({id, disabled}) {
    if (disabled) {
      this.store.dispatch(new AccountActions.EnableAccount(id));
    } else {
      this.store.dispatch(new AccountActions.DisableAccount(id));
    }
  }
}
