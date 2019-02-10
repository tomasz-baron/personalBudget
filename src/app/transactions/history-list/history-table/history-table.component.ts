import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';
import { Transaction } from 'src/app/shared/model';


@Component({
  selector: 'app-history-table',
  templateUrl: './history-table.component.html',
  styleUrls: ['./history-table.component.scss']
})
export class HistoryTableComponent implements OnInit {
  @Input()
  data: Transaction[];

  @ViewChild(MatSort)
  sort: MatSort;

  displayedColumns = ['date', 'description', 'type', 'from', 'to', 'amount', 'currency', 'category'];
  dataSource;

  constructor() { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.data);
    this.dataSource.sort = this.sort;
  }

}
