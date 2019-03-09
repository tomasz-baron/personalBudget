import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';
import { Transaction, TransactionType, TransactionCategory } from 'src/app/shared/model';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-history-table',
  templateUrl: './history-table.component.html',
  styleUrls: ['./history-table.component.scss']
})
export class HistoryTableComponent implements OnInit {
  @Input()
  data: Observable<Transaction[]>;

  @Output()
  selectTransaction = new EventEmitter<Transaction>();

  @ViewChild(MatSort)
  sort: MatSort;

  displayedColumns = ['date', 'description', 'type', 'from', 'to', 'amount', 'category'];
  dataSource;
  transactionType = TransactionType;
  transactionCategory = TransactionCategory;

  constructor() { }

  ngOnInit() {
    this.data.subscribe((transactions: Transaction[]) => {
      this.dataSource = new MatTableDataSource(transactions);
      this.dataSource.sort = this.sort;
    });
  }

  public onSelectTransaction(transaction: Transaction) {
    this.selectTransaction.emit(transaction);
  }

}
