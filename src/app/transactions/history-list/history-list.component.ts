import { Component, OnInit } from '@angular/core';
import { Transaction } from 'src/app/shared/model';
import { MatDialog } from '@angular/material';
import { NewTransactionsComponent } from '../new-transactions/new-transactions.component';
import { EditTransactionComponent } from '../edit-transaction/edit-transaction.component';

@Component({
  selector: 'app-history-list',
  templateUrl: './history-list.component.html',
  styleUrls: ['./history-list.component.scss']
})
export class HistoryListComponent implements OnInit {
  historyList: Transaction[] = [
    { id: '', date: new Date(), description: 'ttest', type: 'INTERNAL', amount: 5, currency: 'PLN', category: 'CLOTHES' }
  ]

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  public addNewTransactions(): void {
    this.dialog.open(NewTransactionsComponent, { disableClose: true });
  }

  public onSelectTransaction(): void {
    this.dialog.open(EditTransactionComponent, { disableClose: true });
  }

}
