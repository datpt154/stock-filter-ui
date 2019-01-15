import { Action } from '@ngrx/store';
import { User } from '../interface/user';

export const UPDATE_USER = 'UPDATE_USER';

export class UpdateUserAction implements Action {
    readonly type = UPDATE_USER;

    constructor(public payload: User) {
    }
}

export type Actions = UpdateUserAction;
