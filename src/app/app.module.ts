import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AccountsListComponent } from './accounts/accounts-list/accounts-list.component';
import { AccountsTableComponent } from './accounts/accounts-list/accounts-table/accounts-table.component';
import { CreditCardsListComponent } from './credit-cards/credit-cards-list/credit-cards-list.component';
import { CreditCardsTableComponent } from './credit-cards/credit-cards-list/credit-cards-table/credit-cards-table.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HistoryListComponent } from './transactions/history-list/history-list.component';
import { HistoryTableComponent } from './transactions/history-list/history-table/history-table.component';
import { MatButtonModule, MatMenuModule, MatTableModule, MatSortModule, MatInputModule, MatIconModule, MatDialogModule, MatProgressBarModule, MatChipsModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';
import { IbanPipe } from './shared/pipes/iban.pipe';
import { AccountTypePipe } from './shared/pipes/account-type.pipe';
import { TransactionTypePipe } from './shared/pipes/transaction-type.pipe';
import { TransactionCategoryPipe } from './shared/pipes/transaction-category.pipe';
import { EditAccountComponent } from './accounts/edit-account/edit-account.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditCreditCardComponent } from './credit-cards/edit-credit-card/edit-credit-card.component';
import { NewTransactionsComponent } from './transactions/new-transactions/new-transactions.component';
import { EditTransactionComponent } from './transactions/edit-transaction/edit-transaction.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    AccountsListComponent,
    AccountsTableComponent,
    CreditCardsListComponent,
    CreditCardsTableComponent,
    DashboardComponent,
    HistoryListComponent,
    HistoryTableComponent,
    IbanPipe,
    EditAccountComponent,
    AccountTypePipe,
    TransactionTypePipe,
    TransactionCategoryPipe,
    NewTransactionsComponent,
    EditCreditCardComponent,
    EditTransactionComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatTableModule,
    MatSortModule,
    MatInputModule,
    MatIconModule,
    MatDialogModule,
    MatChipsModule,
    MatSelectModule,
    MatNativeDateModule,
    MatDatepickerModule,
    CdkTableModule,
    HttpClientModule,
    MatProgressBarModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    EditAccountComponent,
    EditCreditCardComponent,
    NewTransactionsComponent,
    EditTransactionComponent
  ]
})
export class AppModule { }
