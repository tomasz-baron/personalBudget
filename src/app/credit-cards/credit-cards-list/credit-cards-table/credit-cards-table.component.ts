import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';
import { Card } from 'src/app/shared/model';

@Component({
  selector: 'app-credit-cards-table',
  templateUrl: './credit-cards-table.component.html',
  styleUrls: ['./credit-cards-table.component.scss']
})
export class CreditCardsTableComponent implements OnInit {
  @Input()
  data: Card[];

  @ViewChild(MatSort)
  sort: MatSort;

  displayedColumns = ['number', 'funds', 'limit', 'cycle', 'repaymentAmount'];
  dataSource;
  
  constructor() { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.data);
    this.dataSource.sort = this.sort;
  }

}
