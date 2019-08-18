import { Component, OnInit } from '@angular/core';
import { Transaction } from 'src/app/shared/model';
import { MatDialog } from '@angular/material/dialog';
import { NewTransactionsComponent } from '../new-transactions/new-transactions.component';
import { EditTransactionComponent } from '../edit-transaction/edit-transaction.component';
import * as AppReducers from '../../store/app.reducers';
import * as TransactionReducers from '../../store/reducers/transaction.reducers';
import * as TransactionActions from '../../store/actions/transaction.actions';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-history-list',
  templateUrl: './history-list.component.html',
  styleUrls: ['./history-list.component.scss']
})
export class HistoryListComponent implements OnInit {
  historyList$: Observable<Transaction[]>;

  constructor(private dialog: MatDialog, private store: Store<AppReducers.AppState>) { }

  ngOnInit() {
    this.store.dispatch(new TransactionActions.GetTransactions());
    this.historyList$ = this.store.select('transactions').pipe(
      map((data: TransactionReducers.TransactionState) => data.transactions)
    );
  }

  public addNewTransactions(): void {
    this.dialog.open(NewTransactionsComponent, { disableClose: true });
  }

  public onSelectTransaction(transaction: Transaction): void {
    this.store.dispatch(new TransactionActions.SelectTransaction(transaction));
    const dialogRef = this.dialog.open(EditTransactionComponent, { disableClose: true });

    dialogRef.afterClosed().subscribe(() => {
      this.store.dispatch(new TransactionActions.UnselectTransaction());
    });
  }

}
