import { Component, OnInit } from '@angular/core';
import { History } from '../shared/model';

@Component({
  selector: 'app-history-list',
  templateUrl: './history-list.component.html',
  styleUrls: ['./history-list.component.scss']
})
export class HistoryListComponent implements OnInit {
  historyList: History[] = [
    {date: new Date(), description: 'ttest', type: 'I', amount: 5, currency: 'PLN', category: 'T'}
  ]

  constructor() { }

  ngOnInit() {
  }

}
