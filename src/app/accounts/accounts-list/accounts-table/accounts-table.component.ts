import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';
import { Account } from 'src/app/shared/model';

@Component({
  selector: 'app-accounts-table',
  templateUrl: './accounts-table.component.html',
  styleUrls: ['./accounts-table.component.scss']
})
export class AccountsTableComponent implements OnInit {
  @Input()
  data: Account[];

  @ViewChild(MatSort)
  sort: MatSort;

  displayedColumns = ['name', 'number', 'bank', 'currency', 'type', 'balance'];
  dataSource;
  
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  constructor() { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.data); 
    this.dataSource.sort = this.sort;
  }

}
