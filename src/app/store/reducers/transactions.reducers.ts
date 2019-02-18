import * as TransactionActions from '../actions/transaction.actions';
import { Transaction } from 'src/app/shared/model';

export interface TransactionState {
    transactions: Transaction[],
    selectedTransaction: Transaction
}

const initialState: TransactionState = {
    transactions: [],
    selectedTransaction: null
}

export function transactionReducer(state: TransactionState = initialState, action: TransactionActions.TransactionActions) {
    switch (action.type) {
        case TransactionActions.ADD_TRANSACTIONS:
            return {
                ...state,
            };
        case TransactionActions.UPDATE_TRANSACTION:
            return {
                ...state,
            };
        case TransactionActions.REMOVE_TRANSACTION:
            return {
                ...state,
            };
        case TransactionActions.GET_TRANSACTIONS:
            return {
                ...state,
            };
        case TransactionActions.SELECT_TRANSACTION:
            return {
                ...state,
            };
        default:
            return {
                ...state
            };
    }
}