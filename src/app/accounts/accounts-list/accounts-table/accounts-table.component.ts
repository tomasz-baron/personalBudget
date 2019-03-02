import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';
import { Account, AccountType } from 'src/app/shared/model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-accounts-table',
  templateUrl: './accounts-table.component.html',
  styleUrls: ['./accounts-table.component.scss']
})
export class AccountsTableComponent implements OnInit {
  @Input()
  data: Observable<Account[]>;

  @ViewChild(MatSort)
  sort: MatSort;

  @Output()
  selectAccount = new EventEmitter<Account>();

  displayedColumns = ['name', 'number', 'bank', 'currency', 'type', 'balance'];
  dataSource;
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

}
