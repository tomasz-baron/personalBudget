import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { Observable } from 'rxjs';

import { Account, AccountType } from 'src/app/shared/model';

@Component({
  selector: 'app-accounts-table',
  templateUrl: './accounts-table.component.html',
  styleUrls: ['./accounts-table.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0', display: 'none'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class AccountsTableComponent implements OnInit {
  @Input()
  data: Observable<Account[]>;

  @ViewChild(MatSort)
  sort: MatSort;

  @Output()
  selectAccount = new EventEmitter<Account>();

  @Output()
  toggleAccount = new EventEmitter<Account>();

  displayedColumns = ['name', 'number', 'bank', 'currency', 'type', 'balance'];
  dataSource;
  expandedElement: Account | null;
  public accountType = AccountType;
  
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  constructor() { }

  ngOnInit() {
    this.data.subscribe((accounts: Account[]) => {
      this.dataSource = new MatTableDataSource(accounts); 
      this.dataSource.sort = this.sort;
    });
  }

  public onSelectAccount(account: Account) {
    this.selectAccount.emit(account);
  }

  public onToggleAccount(account: Account) {
    this.toggleAccount.emit(account);
  }

}
