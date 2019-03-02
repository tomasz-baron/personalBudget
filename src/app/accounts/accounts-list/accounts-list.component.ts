import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Store } from '@ngrx/store';
import { EditAccountComponent } from '../edit-account/edit-account.component';
import { Account } from 'src/app/shared/model';
import * as AppReducers from '../../store/app.reducers';
import { map } from 'rxjs/operators';
import * as AccountReducers from '../../store/reducers/account.reducers';
import { Observable } from 'rxjs';
import * as AccountActions from '../../store/actions/account.actions';


@Component({
  selector: 'app-accounts-list',
  templateUrl: './accounts-list.component.html',
  styleUrls: ['./accounts-list.component.scss']
})
export class AccountsListComponent implements OnInit {
  accountsList$: Observable<Account[]>;

  constructor(private dialog: MatDialog, private store: Store<AppReducers.AppState>) { }

  ngOnInit() {
    this.store.dispatch(new AccountActions.GetAccounts());
    this.accountsList$ = this.store.select('accounts').pipe(
      map((data: AccountReducers.AccountState) => data.accounts)
    )
  }

  public openForm(editMode?: boolean): void {
    const dialogRef = this.dialog.open(EditAccountComponent, {disableClose: true, data: { editMode }});
    
    dialogRef.afterClosed().subscribe(() => {
      this.store.dispatch(new AccountActions.UnselectAccount());
    });
  }

  public onSelectAccount(account: Account): void {
    this.store.dispatch(new AccountActions.SelectAccount(account));
    this.openForm(true);
  }
}
