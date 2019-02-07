import { Component, OnInit } from '@angular/core';
import { Card } from '../shared/model';

@Component({
  selector: 'app-credit-cards-list',
  templateUrl: './credit-cards-list.component.html',
  styleUrls: ['./credit-cards-list.component.scss']
})
export class CreditCardsListComponent implements OnInit {
  creditCardsList: Card[] = [
    {id: 'test', number: '4e35', funds: 400, limit: 200, cycle: '12', repayment: 0}
  ];

  constructor() { }

  ngOnInit() {
  }

}
