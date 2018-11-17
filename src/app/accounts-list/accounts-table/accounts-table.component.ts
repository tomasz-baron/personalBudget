import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-accounts-table',
  templateUrl: './accounts-table.component.html',
  styleUrls: ['./accounts-table.component.scss']
})
export class AccountsTableComponent implements OnInit {
  @ViewChild(MatSort)
  sort: MatSort;

  displayedColumns = ['name', 'number', 'bank', 'currency', 'type', 'balance'];
  dataSource = new MatTableDataSource([
    {name: "ttt", number: '345346'},
    {name: "dfg", number: '546'}
  ]);
  
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  constructor() { }

  ngOnInit() {
    this.dataSource.sort = this.sort;
  
  }

}
