import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Observable, BehaviorSubject } from 'rxjs';

import { Account, AccountType, AccountTypes } from 'src/app/shared/model';
import { NgForm } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { AccountsService } from '../../services/accounts.service';

@Component({
  selector: 'app-accounts-table',
  templateUrl: './accounts-table.component.html',
  styleUrls: ['./accounts-table.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0', display: 'none' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class AccountsTableComponent implements OnInit {
  @Input()
  data: Observable<Account[]>;

  @Input()
  filters: BehaviorSubject<any>;

  @Input()
  accountTypes: AccountTypes[];

  @ViewChild(MatSort, {static: true})
  sort: MatSort;

  @ViewChild('searchForm', {static: true})
  searchForm: NgForm;

  @Output()
  selectAccount = new EventEmitter<Account>();

  @Output()
  toggleAccount = new EventEmitter<Account>();

  columnsToDisplay = ['name', 'number', 'bankName', 'type', 'balance'];
  dataSource;
  expandedElement: Account | null;
  public accountType = AccountType;
  public textFilter: string = '';
  public summary: number;

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  constructor(private accountsService: AccountsService) { }

  ngOnInit() {
    this.data.subscribe((accounts: Account[]) => {
      this.dataSource = new MatTableDataSource(accounts);
      this.textFilter = '';
      this.dataSource.sort = this.sort;
      this.dataSource.connect().subscribe((data) =>{
        this.summary = this.accountsService.calculateSummary(data);
      })
    });

    this.searchForm.valueChanges
      .pipe(
        debounceTime(100),
      )
      .subscribe(value => {
        this.filters.next(value.type);
      });
  }

  public onSelectAccount(account: Account) {
    this.selectAccount.emit(account);
  }

  public onToggleAccount(account: Account) {
    this.toggleAccount.emit(account);
  }

}
