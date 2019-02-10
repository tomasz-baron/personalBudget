import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HistoryListComponent } from './transactions/history-list/history-list.component';
import { AccountsListComponent } from './accounts/accounts-list/accounts-list.component';
import { CreditCardsListComponent } from './credit-cards/credit-cards-list/credit-cards-list.component';

const routes: Routes = [
  { 
      path: 'dashboard',
      component: DashboardComponent
  },
  {
      path: 'history',
      component: HistoryListComponent
  },
  {
      path: 'accounts',
      component: AccountsListComponent
  },
  {
      path: 'credit-cards',
      component: CreditCardsListComponent
  },
  {
      path: '',
      redirectTo: '/dashboard',
      pathMatch: 'full'
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
