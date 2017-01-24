import { Member } from './member.entity';
import { memberListReducer } from './member-list.reducer';
import { compose } from '@ngrx/core/compose';
import { combineReducers } from '@ngrx/store';

export interface MemberState {
    members: Member[];
}

export default compose(combineReducers)({
    members: memberListReducer
});
