import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-credit-cards-table',
  templateUrl: './credit-cards-table.component.html',
  styleUrls: ['./credit-cards-table.component.scss']
})
export class CreditCardsTableComponent implements OnInit {
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
