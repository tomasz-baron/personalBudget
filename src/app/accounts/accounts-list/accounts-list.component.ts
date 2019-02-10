import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { EditAccountComponent } from '../edit-account/edit-account.component';
import { Account } from 'src/app/shared/model';

@Component({
  selector: 'app-accounts-list',
  templateUrl: './accounts-list.component.html',
  styleUrls: ['./accounts-list.component.scss']
})
export class AccountsListComponent implements OnInit {
  accountsList: Account[] = [
    {id: '1', name: 'test', number: '25487349072347238', bankName: 'TT', currency: 'PLN', type: 'CURRENT', balance: 200.01, initialBalance: 1},
    {id: '1', name: 'test2', number: '96259072347238', bankName: 'TT', currency: 'EUR', type: 'SAVINGS', balance: 3857, initialBalance: 2}
  ]

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  addNewAccount(): void {
    this.dialog.open(EditAccountComponent, {disableClose: true});
  }

}
