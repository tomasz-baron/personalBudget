import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { 
  MatButtonModule,
  MatMenuModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AccountsHistoryComponent } from './accounts-history/accounts-history.component';
import { HistoryTableComponent } from './accounts-history/history-table/history-table.component';
import { AccountsListComponent } from './accounts-list/accounts-list.component';
import { AccountsTableComponent } from './accounts-list/accounts-table/accounts-table.component';
import { CreditCardsListComponent } from './credit-cards-list/credit-cards-list.component';
import { CreditCardsTableComponent } from './credit-cards-list/credit-cards-table/credit-cards-table.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    AccountsHistoryComponent,
    HistoryTableComponent,
    AccountsListComponent,
    AccountsTableComponent,
    CreditCardsListComponent,
    CreditCardsTableComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
