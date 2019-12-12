import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { switchMap, map } from 'rxjs/operators';
import { AccountsService } from 'src/app/accounts/services/accounts.service';
import * as AccountActions from '../actions/account.actions';
import { Account } from 'src/app/shared/model';

@Injectable()
export class AccountEffects {

    constructor(private actions$: Actions, private accountsService: AccountsService) { }

    @Effect()
    getAccounts = this.actions$
        .pipe(
            ofType(AccountActions.GET_ACCOUNTS),
            map((action: AccountActions.GetAccounts) => action.payload),
            switchMap((type: string) => {
                return this.accountsService.getAccounts(type);
            }),
            map((accounts: Account[]) => new AccountActions.SetAccounts(accounts))
        );

    @Effect()
    updateAccount = this.actions$
        .pipe(
            ofType(AccountActions.UPDATE_ACCOUNT),
            map((action: AccountActions.UpdateAccount) => action.payload),
            switchMap((data: { id: string, account: Account }) => {
                return this.accountsService.updateAccount(data.id, data.account);
            })
        )

    @Effect()
    addAccount = this.actions$
        .pipe(
            ofType(AccountActions.ADD_ACCOUNT),
            map((action: AccountActions.AddAccount) => action.payload),
            switchMap((account: Account) => {
                return this.accountsService.addAccount(account);
            })
        );

    @Effect()
    enableAccount = this.actions$
        .pipe(
            ofType(AccountActions.ENABLE_ACCOUNT),
            map((action: AccountActions.EnableAccount) => action.payload),
            switchMap((id: string) => {
                console.log(id);
                return this.accountsService.enableAccount(id);
            }),
            map(() => {
                return new AccountActions.GetAccounts('');
            })
        )

    @Effect()
    disableAccount = this.actions$
        .pipe(
            ofType(AccountActions.DISABLE_ACCOUNT),
            map((action: AccountActions.EnableAccount) => action.payload),
            switchMap((id: string) => {
                console.log(id);
                return this.accountsService.disableAccount(id);
            }),
            map(() => {
                return new AccountActions.GetAccounts('');
            })
        )
}