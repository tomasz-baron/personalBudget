
import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Subscription } from 'rxjs';
import * as AccountActions from '../../store/actions/account.actions';
import * as AccountReducers from '../../store/reducers/account.reducers';
import * as AppReducers from '../../store/app.reducers';
import { Store } from '@ngrx/store';
import { Account, AccountType } from 'src/app/shared/model';

@Component({
  selector: 'app-edit-account',
  templateUrl: './edit-account.component.html',
  styleUrls: ['./edit-account.component.scss']
})
export class EditAccountComponent implements OnInit, OnDestroy {
  accountForm: FormGroup;
  currencies: string[] = [
    'PLN',
    'EUR'
  ];
  accountTypes: string[] = [
    'CURRENT',
    'SAVINGS',
    'CASH',
    'RETIREMENT'
  ];

  subscription: Subscription;
  id: string;

  public accountType = AccountType;

  constructor(private dialogRef: MatDialogRef<EditAccountComponent>, private store: Store<AppReducers.AppState>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    if (this.data.editMode) {
      this.subscription = this.store.select('accounts').subscribe((accountState: AccountReducers.AccountState) => {
        this.id = accountState.selectedAccount.id;
        this.initForm(accountState.selectedAccount);
      });
    } else {
      this.initForm({id: '', name: '', number: '', bankName: '', currency: 'PLN', interestRate: 0, type: 'CURRENT', included: true, balance: 0, initialBalance: 0});
    }
  }

  ngOnDestroy() {
    if (this.data.editMode) {
      this.subscription.unsubscribe();
    }
  }

  public save() {
    if (this.data.editMode) {
      console.log(this.accountForm.value);
    } else {
      this.store.dispatch(new AccountActions.AddAccount(this.accountForm.value));
    }
  }

  public cancel(): void {
    this.dialogRef.close();
  }

  private initForm(account: Account) {
    this.accountForm = new FormGroup({
      name: new FormControl(account.name, [Validators.required]),
      number: new FormControl(account.number || ''),
      bankName: new FormControl(account.bankName || ''),
      currency: new FormControl(account.currency || '', [Validators.required]),
      interestRate: new FormControl(account.interestRate || 0),
      type: new FormControl(account.type, [Validators.required]),
      initialBalance: new FormControl(account.initialBalance, [Validators.required]),
      included: new FormControl(account.included || false)
    });
  }

}
