import * as actions from '../actions';
import { User } from '../../interface/user';

export function userReducer(lastState, action: actions.UpdateUserAction): User {
    switch (action.type) {
        case actions.UPDATE_USER:
            return action.payload;
    }

    // We don't care about any other actions right now.
    return lastState;
}
