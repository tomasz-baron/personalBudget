import { Action } from '@ngrx/store';
import { Card } from 'src/app/shared/model';

export const ADD_CREDIT_CARD = 'ADD_CREDIT_CARD';
export const UPDATE_CREDIT_CARD = 'UPDATE_CREDIT_CARD';
export const REMOVE_CREDIT_CARD = 'REMOVE_CREDIT_CARD';
export const DISABLE_CREDIT_CARD = 'DISABLE_CREDIT_CARD';
export const GET_CREDIT_CARDS = 'GET_CREDIT_CARDS';
export const SELECT_CREDIT_CARD = 'SELECT_CREDIT_CARD';

export class AddCreditCard implements Action {
    readonly type = ADD_CREDIT_CARD;

    constructor(public payload: Card) { }
}

export class UpdateCreditCard implements Action {
    readonly type = UPDATE_CREDIT_CARD;

    constructor(public payload: Card) { }
}

export class RemoveCreditCard implements Action {
    readonly type = REMOVE_CREDIT_CARD;

    constructor(public payload: string) { }
}

export class DisableCreditCard implements Action {
    readonly type = DISABLE_CREDIT_CARD;

    constructor(public payload: string) { }
}

export class GetCreditCards implements Action {
    readonly type = GET_CREDIT_CARDS;

    constructor() { }
}

export class SelectCreditCard implements Action {
    readonly type = SELECT_CREDIT_CARD;

    constructor(public payload: Card) { }
}

export type CreditCardActions = AddCreditCard | 
                                    UpdateCreditCard |
                                    RemoveCreditCard |
                                    DisableCreditCard |
                                    GetCreditCards |
                                    SelectCreditCard;