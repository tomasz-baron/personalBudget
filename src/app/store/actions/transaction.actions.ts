import { Action } from '@ngrx/store';
import { Transaction } from 'src/app/shared/model';

export const ADD_TRANSACTIONS = 'ADD_TRANSACTIONS';
export const UPDATE_TRANSACTION = 'UPDATE_TRANSACTION';
export const REMOVE_TRANSACTION = 'REMOVE_TRANSACTION';
export const GET_TRANSACTIONS = 'GET_TRANSACTIONS';
export const SELECT_TRANSACTION = 'SELECT_TRANSACTION';

export class AddTransactions implements Action {
    readonly type = ADD_TRANSACTIONS;

    constructor(public payload: Transaction[]) {}
}

export class UpdateTransaction implements Action {
    readonly type = UPDATE_TRANSACTION;

    constructor(public payload: Transaction) {}
}

export class RemoveTransaction implements Action {
    readonly type = REMOVE_TRANSACTION;

    constructor(public payload: string) {}
}

export class GetTransactions implements Action {
    readonly type = GET_TRANSACTIONS;

    constructor() {}
}

export class SelectTransaction implements Action {
    readonly type = SELECT_TRANSACTION;

    constructor(public payload: Transaction) {}
}

export type TransactionActions = AddTransactions |
                                    UpdateTransaction |
                                    RemoveTransaction |
                                    GetTransactions |
                                    SelectTransaction;