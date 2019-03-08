import { Action } from '@ngrx/store';


export const GET_ACCOUNTS = 'GET_ACCOUNTS';
export const SET_ACCOUNTS = 'SET_ACCOUNTS';


export class GetAccounts implements Action {
    readonly type = GET_ACCOUNTS;

    constructor(public payload: string) { }
}

export class SetAccounts implements Action {
    readonly type = SET_ACCOUNTS;

    constructor(public payload: Account[]) { }
}


export type DictionaryActions = GetAccounts |
    SetAccounts;