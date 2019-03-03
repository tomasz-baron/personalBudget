import { Action } from '@ngrx/store';
import { Account } from 'src/app/shared/model';

export const ADD_ACCOUNT = 'ADD_ACCOUNT';
export const UPDATE_ACCOUNT = 'UPDATE_ACCOUNT';
export const REMOVE_ACCOUNT = 'REMOVE_ACCOUNT';
export const DISABLE_ACCOUNT = 'DISABLE_ACCOUNT';
export const GET_ACCOUNTS = 'GET_ACCOUNTS';
export const SET_ACCOUNTS = 'SET_ACCOUNTS';
export const UNSELECT_ACCOUNT = 'UNSELECT_ACCOUNT';
export const SELECT_ACCOUNT = 'SELECT_ACCOUNT';

export class AddAccount implements Action {
    readonly type = ADD_ACCOUNT;

    constructor(public payload: Account) { }
}

export class UpdateAccount implements Action {
    readonly type = UPDATE_ACCOUNT;

    constructor(public payload: {id: string, account: Account}) { }
}

export class RemoveAccount implements Action {
    readonly type = REMOVE_ACCOUNT;

    constructor(public payload: string) { }
}

export class DisableAccount implements Action {
    readonly type = DISABLE_ACCOUNT;

    constructor(public payload: string) { }
}

export class GetAccounts implements Action {
    readonly type = GET_ACCOUNTS;

    constructor() { }
}

export class SetAccounts implements Action {
    readonly type = SET_ACCOUNTS;

    constructor(public payload: Account[]) {}
}

export class SelectAccount implements Action {
    readonly type = SELECT_ACCOUNT;

    constructor(public payload: Account) { }
}

export class UnselectAccount implements Action {
    readonly type = UNSELECT_ACCOUNT;

    constructor() {}
}

export type AccountActions = AddAccount |
                                UpdateAccount |
                                RemoveAccount |
                                DisableAccount |
                                GetAccounts |
                                SetAccounts |
                                UnselectAccount |
                                SelectAccount;