import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accounts-list',
  templateUrl: './accounts-list.component.html',
  styleUrls: ['./accounts-list.component.scss']
})
export class AccountsListComponent implements OnInit {
  accountsList = [
    {name: 'test', number: '25487349072347238', bankName: 'TT', currency: 'PLN', type: 'R', balance: 200.01},
    {name: 'test2', number: '96259072347238', bankName: 'TT', currency: 'EUR', type: 'S', balance: 3857}
  ]

  constructor() { }

  ngOnInit() {
  }

}
