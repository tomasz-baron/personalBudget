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
        
    @Effect()
    updateAccount = this.actions$
        .pipe(
            ofType(AccountActions.UPDATE_ACCOUNT),
            map((action: AccountActions.UpdateAccount) => action.payload),
            switchMap((data: {id: string, account: Account}) => {
                return this.accountsService.updateAccount(data.id, data.account);
            }),
            map(() => {
                return new AccountActions.GetAccounts();
            })
        )

    @Effect()
    addAccount = this.actions$
        .pipe(
            ofType(AccountActions.ADD_ACCOUNT),
            map((action: AccountActions.AddAccount) => action.payload),
            switchMap((account: Account) => {
                return this.accountsService.addAccount(account);
            }),
            map(() => {
                return new AccountActions.GetAccounts();
            })
        );
}