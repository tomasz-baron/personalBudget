import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AccountsListComponent } from './accounts-list/accounts-list.component';
import { AccountsTableComponent } from './accounts-list/accounts-table/accounts-table.component';
import { CreditCardsListComponent } from './credit-cards-list/credit-cards-list.component';
import { CreditCardsTableComponent } from './credit-cards-list/credit-cards-table/credit-cards-table.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HistoryListComponent } from './history-list/history-list.component';
import { HistoryTableComponent } from './history-list/history-table/history-table.component';
import { MatButtonModule, MatMenuModule, MatTableModule, MatSortModule, MatInputModule, MatIconModule } from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatTableModule,
    MatSortModule,
    MatInputModule,
    MatIconModule,
    CdkTableModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
