import { NgModule } from '@angular/core';
import { 
    RouterModule, 
    Routes 
} from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HistoryListComponent } from './history-list/history-list.component';
import { AccountsListComponent } from './accounts-list/accounts-list.component';
import { CreditCardsListComponent } from './credit-cards-list/credit-cards-list.component';

const ROUTES: Routes = [
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
  imports: [ RouterModule.forRoot(ROUTES) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
