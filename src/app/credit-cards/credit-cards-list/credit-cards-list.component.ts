import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/shared/model';
import { MatDialog } from '@angular/material';
import { EditCreditCardComponent } from '../edit-credit-card/edit-credit-card.component';

@Component({
  selector: 'app-credit-cards-list',
  templateUrl: './credit-cards-list.component.html',
  styleUrls: ['./credit-cards-list.component.scss']
})
export class CreditCardsListComponent implements OnInit {
  creditCardsList: Card[] = [
    {id: 'test', number: '4e35', funds: 400, initialFunds: 1000, limit: 200, cycle: '12', repaymentAmount: 0}
  ];

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  addNewCreditCard(): void {
    this.dialog.open(EditCreditCardComponent, {disableClose: true});
  }

}
