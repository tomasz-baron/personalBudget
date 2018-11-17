import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-history-table',
  templateUrl: './history-table.component.html',
  styleUrls: ['./history-table.component.css']
})
export class HistoryTableComponent implements OnInit {
  @ViewChild(MatSort)
  sort: MatSort;

  displayedColumns = ['date'];
  dataSource = new MatTableDataSource([
    {date: '10-02-2018'}
  ]);

  constructor() { }

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }

}
