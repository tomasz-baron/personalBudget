import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { 
  MatButtonModule,
  MatMenuModule,
  MatTableModule,
  MatSortModule,
  MatInputModule,
  MatIconModule
} from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';

import { AppConfig } from '../config/app.config';
import { TranslationConfigModule } from './shared/modules/translation.config.module';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AccountsListComponent } from './accounts-list/accounts-list.component';
import { AccountsTableComponent } from './accounts-list/accounts-table/accounts-table.component';
import { CreditCardsListComponent } from './credit-cards-list/credit-cards-list.component';
import { CreditCardsTableComponent } from './credit-cards-list/credit-cards-table/credit-cards-table.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { HistoryListComponent } from './history-list/history-list.component';
import { HistoryTableComponent } from './history-list/history-table/history-table.component';

export function initResources(config: AppConfig, translate: TranslationConfigModule) {
  return () => config.load(translate);
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
    HistoryTableComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatTableModule,
    MatSortModule,
    MatInputModule,
    MatIconModule,
    TranslationConfigModule,
    CdkTableModule
  ],
  providers: [
    AppConfig, {
      provide: APP_INITIALIZER,
      useFactory: initResources,
      deps: [ AppConfig, TranslationConfigModule ],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
