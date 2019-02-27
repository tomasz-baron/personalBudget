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

export function transactionReducer(state = initialState, action: TransactionActions.TransactionActions) {
    switch (action.type) {
        case TransactionActions.SET_TRANSACTIONS:
            return {
                ...state,
                transactions: action.payload,
            }
        case TransactionActions.SELECT_TRANSACTION:
            return {
                ...state,
                selectedTransaction: action.payload,
            };
        case TransactionActions.UNSELECT_TRANSACTION:
            return {
                ...state,
                selectedTransaction: null,
            }
        default:
            return {
                ...state
            };
    }
}