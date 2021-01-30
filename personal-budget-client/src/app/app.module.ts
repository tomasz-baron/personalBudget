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
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { CdkTableModule } from '@angular/cdk/table';
import { IbanPipe } from './shared/pipes/iban.pipe';
import { EditAccountComponent } from './accounts/edit-account/edit-account.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { EditCreditCardComponent } from './credit-cards/edit-credit-card/edit-credit-card.component';
import { NewTransactionsComponent } from './transactions/new-transactions/new-transactions.component';
import { EditTransactionComponent } from './transactions/edit-transaction/edit-transaction.component';
import { StoreModule } from '@ngrx/store';
import { TransactionEffects } from './store/effects/transaction.effects';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from './store/app.reducers';
import { environment } from '../environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AccountEffects } from './store/effects/account.effects';
import { AccountNamePipe } from './shared/pipes/account-name.pipe';
import { AccountSelectComponent } from './shared/controls/account-select/account-select.component';

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
    NewTransactionsComponent,
    EditCreditCardComponent,
    EditTransactionComponent,
    AccountNamePipe,
    AccountSelectComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
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
    MatCheckboxModule,
    MatSlideToggleModule,
    MatCardModule,
    MatDividerModule,
    CdkTableModule,
    HttpClientModule,
    MatProgressBarModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([TransactionEffects, AccountEffects]),
    !environment.production && StoreDevtoolsModule.instrument()
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
