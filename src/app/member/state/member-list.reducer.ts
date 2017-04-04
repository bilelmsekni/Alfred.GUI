import { Action } from '@ngrx/store';
import { Member } from '../common';

const initialState: Member[] = [];

export function memberListReducer(state = initialState, action: Action): Member[] {
    switch (action.type) {
        case 'LOAD_MEMBERS': {
            return action.payload;
        }
        case 'CREATE_MEMBER': {
            return [...state, action.payload];
        }
        default: {
            return state;
        }
    }
}
