import { Action } from '@ngrx/store';
import { Transaction } from 'src/app/shared/model';

export const ADD_TRANSACTIONS = 'ADD_TRANSACTIONS';
export const UPDATE_TRANSACTION = 'UPDATE_TRANSACTION';
export const REMOVE_TRANSACTION = 'REMOVE_TRANSACTION';
export const GET_TRANSACTIONS = 'GET_TRANSACTIONS';
export const SET_TRANSACTIONS = 'SET_TRANSACTIONS';
export const SELECT_TRANSACTION = 'SELECT_TRANSACTION';
export const UNSELECT_TRANSACTION = 'UNSELECT_TRANSACTION';

export class AddTransactions implements Action {
    readonly type = ADD_TRANSACTIONS;

    constructor(public payload: Transaction[]) {}
}

export class UpdateTransaction implements Action {
    readonly type = UPDATE_TRANSACTION;

    constructor(public payload: {id: string, transaction: Transaction}) {}
}

export class RemoveTransaction implements Action {
    readonly type = REMOVE_TRANSACTION;

    constructor(public payload: string) {}
}

export class GetTransactions implements Action {
    readonly type = GET_TRANSACTIONS;

    constructor() {}
}

export class SetTransactions implements Action {
    readonly type = SET_TRANSACTIONS;

    constructor(public payload: Transaction[]) {}
}

export class SelectTransaction implements Action {
    readonly type = SELECT_TRANSACTION;

    constructor(public payload: Transaction) {}
}

export class UnselectTransaction implements Action {
    readonly type = UNSELECT_TRANSACTION;

    constructor() {}
}

export type TransactionActions = AddTransactions |
                                    UpdateTransaction |
                                    RemoveTransaction |
                                    GetTransactions |
                                    SetTransactions |
                                    SelectTransaction |
                                    UnselectTransaction;