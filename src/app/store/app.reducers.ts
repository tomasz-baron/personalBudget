import * as AccountReducers from './reducers/account.reducers';
import * as CreditCardReducers from './reducers/credit-card.reducers';
import * as TransactionReducers from './reducers/transaction.reducers';

import { ActionReducerMap } from "@ngrx/store";

export interface AppState {
    accounts: AccountReducers.AccountState,
    creditCards: CreditCardReducers.CreditCardState,
    transactions: TransactionReducers.TransactionState
    //dictionaries: {}
}

export const reducers: ActionReducerMap<AppState> = {
    accounts: AccountReducers.accountReducer,
    creditCards: CreditCardReducers.creditCardReducer,
    transactions: TransactionReducers.transactionReducer
};