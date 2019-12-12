import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { switchMap, map } from 'rxjs/operators';
import * as TransactionActions from '../actions/transaction.actions';
import { TransactionsService } from 'src/app/transactions/services/transactions.service';
import { Transaction } from 'src/app/shared/model';
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducers';


@Injectable()
export class TransactionEffects {

    constructor(private actions$: Actions, private transactionsService: TransactionsService, private store$: Store<AppState>) { }

    @Effect()
    getTransactions = this.actions$
        .pipe(
            ofType(TransactionActions.GET_TRANSACTIONS),
            switchMap(() => {
                return this.transactionsService.getTransactions();
            }),
            map((transactions: Transaction[]) => {
                transactions.map((transaction) => transaction.date = new Date(transaction.date));
                return transactions;
            }),
            map((transactions: Transaction[]) => new TransactionActions.SetTransactions(transactions))
        );


    @Effect()
    updateTransaction = this.actions$
        .pipe(
            ofType(TransactionActions.UPDATE_TRANSACTION),
            map((action: TransactionActions.UpdateTransaction) => action.payload),
            switchMap((data: { id: string, transaction: Transaction }) => {
                return this.transactionsService.updateTransaction(data.id, data.transaction);
            }),
            map(() => {
                return new TransactionActions.GetTransactions();
            })
        );

    @Effect()
    addTransactions = this.actions$
        .pipe(
            ofType(TransactionActions.ADD_TRANSACTIONS),
            map((action: TransactionActions.AddTransactions) => action.payload),
            switchMap((transactions: Transaction[]) => {
                transactions.forEach((transaction: Transaction) => {
                    this.transactionsService.addTransaction(transaction).subscribe();
                });
                return transactions;
            }),
            map(() => {
                return new TransactionActions.GetTransactions();
            })
        );



}