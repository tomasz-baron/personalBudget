import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { switchMap, map } from 'rxjs/operators';
import { AccountsService } from 'src/app/accounts/services/accounts.service';
import * as AccountActions from '../actions/account.actions';
import { Account } from 'src/app/shared/model';

@Injectable()
export class AccountEffects {

    constructor(private actions$: Actions, private accountsService: AccountsService) {}

    @Effect()
    getAccounts = this.actions$
        .pipe(
            ofType(AccountActions.GET_ACCOUNTS),
            switchMap(() => {
                return this.accountsService.getAccounts();
            }),
            map((accounts: Account[]) => new AccountActions.SetAccounts(accounts))
        );
}