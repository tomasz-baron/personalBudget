import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import * as AppReducers from '../../store/app.reducers';
import * as TransactionReducers from '../../store/reducers/transaction.reducers';
import { Transaction } from 'src/app/shared/model';
import * as TransactionActions from '../../store/actions/transaction.actions';

@Component({
  selector: 'app-edit-transaction',
  templateUrl: './edit-transaction.component.html',
  styleUrls: ['./edit-transaction.component.scss']
})
export class EditTransactionComponent implements OnInit, OnDestroy {
  transactionForm: FormGroup;
  currencies: string[] = [
    'PLN',
    'EUR'
  ];

  transactionTypes: string[] = [
    'INTERNAL',
    'OUTGOING',
    'INCOMING'
  ];

  transactionCategories: string[] = [
    'CLOTHES',
    'FOOD',
    'ENTERTAINMENT',
    'EDUCATION',
    'SPORT',
    'DIY',
    'HEALTH',
    'IT',
    'ELECTRONICS',
    'APARTMENT',
    'CHARGES'
  ]

  private subscription: Subscription;
  private id: string;

  constructor(private dialogRef: MatDialogRef<EditTransactionComponent>, private store: Store<AppReducers.AppState>) { }

  ngOnInit() {
    this.subscription = this.store.select('transactions').subscribe((transactionState: TransactionReducers.TransactionState) => {
      this.id = transactionState.selectedTransaction.id;
      this.initForm(transactionState.selectedTransaction);
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  public save() {
    this.store.dispatch(new TransactionActions.UpdateTransaction({id: this.id, transaction: this.transactionForm.value}));
    this.dialogRef.close();
  }

  public cancel():void {
    this.dialogRef.close();
  }

  private initForm(transaction: Transaction) {
    this.transactionForm = new FormGroup({
      date: new FormControl(new Date(transaction.date), [Validators.required]),
      description: new FormControl(transaction.description, [Validators.required]),
      type: new FormControl(transaction.type, [Validators.required]),
      fromAccountId: new FormControl(transaction.fromAccountId),
      toAccountId: new FormControl(transaction.toAccountId),
      amount: new FormControl(transaction.amount, [Validators.required]),
      currency: new FormControl(transaction.currency, [Validators.required]),
      category: new FormControl(transaction.category, [Validators.required])
    });
  }

}
