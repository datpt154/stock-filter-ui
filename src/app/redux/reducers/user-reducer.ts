import * as actions from '../actions';
import { User } from '../../interface/user';

const initialState: User = {
    provider: undefined,
    id: undefined,
    email: undefined,
    name: undefined,
    photoUrl: undefined,
    firstName: undefined,
    lastName: undefined,
    authToken: undefined,
};

export function userReducer(lastState = initialState, action: actions.UpdateUserAction): User {
    switch (action.type) {
        case actions.UPDATE_USER:
            return action.payload;
    }

    // We don't care about any other actions right now.
    return lastState;
}
