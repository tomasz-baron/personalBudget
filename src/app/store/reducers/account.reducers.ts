import * as AccountActions from '../actions/account.actions'
import { Account } from 'src/app/shared/model';

export interface AccountState {
    accounts: Account[],
    selectedAccount: Account
}

const initialState: AccountState = {
    accounts: [],
    selectedAccount: null
}

export function accountReducer(state: AccountState = initialState, action: AccountActions.AccountActions) {
    switch (action.type) {
        case AccountActions.ADD_ACCOUNT:
            return {
                ...state,
            };
        case AccountActions.UPDATE_ACCOUNT:
            return {
                ...state,
            };
        case AccountActions.REMOVE_ACCOUNT:
            return {
                ...state,
            };
        case AccountActions.DISABLE_ACCOUNT:
            return {
                ...state,
            };
        case AccountActions.GET_ACCOUNTS:
            return {
                ...state,
            };
        case AccountActions.SET_ACCOUNTS:
            return {
                ...state,
                accounts: action.payload,
            }
        case AccountActions.SELECT_ACCOUNT:
            return {
                ...state,
                selectedAccount: action.payload,
            };
        case AccountActions.UNSELECT_ACCOUNT:
            return {
                ...state,
                selectedAccount: null,
            }
        default:
            return {
                ...state
            };
    }
}