import * as CreditCardActions from '../actions/credit-card.actions';
import { Card } from 'src/app/shared/model';

export interface CreditCardState {
    creditCards: Card[],
    selectedCreditCard: Card
}

const initialState: CreditCardState = {
    creditCards: [],
    selectedCreditCard: null
}

export function creditCardReducer(state: CreditCardState = initialState, action: CreditCardActions.CreditCardActions) {
    switch (action.type) {
        case CreditCardActions.ADD_CREDIT_CARD:
            return {
                ...state,
            };
        case CreditCardActions.UPDATE_CREDIT_CARD:
            return {
                ...state,
            };
        case CreditCardActions.REMOVE_CREDIT_CARD:
            return {
                ...state,
            };
        case CreditCardActions.DISABLE_CREDIT_CARD:
            return {
                ...state,
            };
        case CreditCardActions.GET_CREDIT_CARDS:
            return {
                ...state,
            };
        case CreditCardActions.SELECT_CREDIT_CARD:
            return {
                ...state,
            };
        default:
            return {
                ...state,
            };
    }
}