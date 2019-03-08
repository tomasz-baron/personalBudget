import * as DictionaryActions from '../actions/dictionary.actions';
import { AccountTypes, TransactionTypes, TransactionCategories, Currency } from 'src/app/shared/model';

export interface DictionaryState {
    accountTypes: AccountTypes[];
    transactionTypes: TransactionTypes[];
    transactionCategories: TransactionCategories[];
    currencies: Currency[];
}

const initialState: DictionaryState = {
    accountTypes: [
        'CURRENT',
        'SAVINGS',
        'CASH',
        'RETIREMENT'
    ],
    transactionTypes: [
        'INTERNAL',
        'OUTGOING',
        'INCOMING'
    ],
    transactionCategories: [
        'CLOTHES',
        'FOOD',
        'ENTERTAINMENT',
        'EDUCATION',
        'SPORT',
        'DIY',
        'HEALTH',
        'IT',
        'ELECTRONICS',
        'APARTMENT',
        'CHARGES'
    ],
    currencies: [
        'PLN',
        'EUR'
    ]
}

export function dictionaryReducer(state: DictionaryState = initialState, action: DictionaryActions.DictionaryActions) {
    switch (action.type) {
        case DictionaryActions.SET_ACCOUNTS:
            return {
                ...state,
                accounts: action.payload,
            }
        default:
            return {
                ...state
            };
    }
}