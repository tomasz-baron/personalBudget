
import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Subscription, Observable } from 'rxjs';
import * as AccountActions from '../../store/actions/account.actions';
import * as AccountReducers from '../../store/reducers/account.reducers';
import * as AppReducers from '../../store/app.reducers';
import { Store } from '@ngrx/store';
import { Account, AccountType, AccountTypes, Currency } from 'src/app/shared/model';
import { map } from 'rxjs/operators';
import { DictionaryState } from 'src/app/store/reducers/dictionary.reducers';

@Component({
  selector: 'app-edit-account',
  templateUrl: './edit-account.component.html',
  styleUrls: ['./edit-account.component.scss']
})
export class EditAccountComponent implements OnInit, OnDestroy {
  accountForm: FormGroup;
  currencies$: Observable<Currency[]>;
  accountTypes$: Observable<AccountTypes[]>;

  subscription: Subscription;
  id: string;

  public accountType = AccountType;

  constructor(private dialogRef: MatDialogRef<EditAccountComponent>, private store: Store<AppReducers.AppState>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.accountTypes$ = this.store.select('dictionaries').pipe(
      map((data: DictionaryState) => data.accountTypes)
    );
    this.currencies$ = this.store.select('dictionaries').pipe(
      map((data: DictionaryState) => data.currencies)
    );
    if (this.data.editMode) {
      this.subscription = this.store.select('accounts').subscribe((accountState: AccountReducers.AccountState) => {
        this.id = accountState.selectedAccount.id;
        this.initForm(accountState.selectedAccount);
      });
    } else {
      this.initForm({ id: '', name: '', number: '', bankName: '', currency: 'PLN', interestRate: undefined, type: 'CURRENT', included: true, balance: undefined, initialBalance: undefined });
    }
  }

  ngOnDestroy() {
    if (this.data.editMode) {
      this.subscription.unsubscribe();
    }
  }

  public save() {
    if (this.data.editMode) {
      this.store.dispatch(new AccountActions.UpdateAccount({ id: this.id, account: this.accountForm.value }))
    } else {
      this.store.dispatch(new AccountActions.AddAccount(this.accountForm.value));
    }
    this.dialogRef.close();
  }

  public cancel(): void {
    this.dialogRef.close();
  }

  public onSelectType() {
    if (this.accountForm.value.type === 'SAVINGS' || this.accountForm.value.type === 'RETIREMENT') {
      this.accountForm.get('interestRate').enable();
    } else {
      this.accountForm.get('interestRate').disable();
    }
  }

  private initForm(account: Account) {
    this.accountForm = new FormGroup({
      name: new FormControl(account.name, [Validators.required]),
      number: new FormControl(account.number || ''),
      bankName: new FormControl(account.bankName || ''),
      currency: new FormControl(account.currency || '', [Validators.required]),
      interestRate: new FormControl(account.interestRate),
      type: new FormControl(account.type, [Validators.required]),
      initialBalance: new FormControl(account.initialBalance, [Validators.required]),
      included: new FormControl(account.included || false)
    });
    this.onSelectType();
  }

}
