import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl, Validators, AbstractControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { Store } from '@ngrx/store';
import * as AppReducers from '../../store/app.reducers';
import * as TransactionReducers from '../../store/reducers/transaction.reducers';
import { Transaction, TransactionType, TransactionCategory } from 'src/app/shared/model';
import * as TransactionActions from '../../store/actions/transaction.actions';

@Component({
  selector: 'app-new-transactions',
  templateUrl: './new-transactions.component.html',
  styleUrls: ['./new-transactions.component.scss']
})
export class NewTransactionsComponent implements OnInit {
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
  ];

  public transactionType = TransactionType;
  public transactionCategory = TransactionCategory;

  constructor(private dialogRef: MatDialogRef<NewTransactionsComponent>, private store: Store<AppReducers.AppState>) { }

  ngOnInit() {
    this.initForm();
  }

  public addTransaction() {
    (<FormArray>this.transactionForm.get('transactions')).push(
      new FormGroup({
        'date': new FormControl(new Date(), [Validators.required]),
        'description': new FormControl('', [Validators.required]),
        'type': new FormControl('', [Validators.required]),
        'fromAccountId': new FormControl(),
        'toAccountId': new FormControl(),
        'amount': new FormControl('', [Validators.required]),
        'currency': new FormControl('PLN', [Validators.required]),
        'category': new FormControl('', [Validators.required])
      })
    );
  }

  public removeTransaction(index: number) {
    (<FormArray>this.transactionForm.get('transactions')).removeAt(index);
  }

  public getControls(): AbstractControl[] {
    return (<FormArray>this.transactionForm.get('transactions')).controls;
  }

  public save() {
    this.store.dispatch(new TransactionActions.AddTransactions(this.transactionForm.value.transactions));
    this.dialogRef.close();
  }

  public cancel():void {
    this.dialogRef.close();
  }

  private initForm() {
    this.transactionForm = new FormGroup({
      'transactions': new FormArray([])
    });
    this.addTransaction()
  }

}
