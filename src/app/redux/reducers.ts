import { Store } from '@ngrx/store';
// import 'rxjs/add/operator/take';
import { take } from 'rxjs/operators';
import { User } from '../interface/user';
import { userReducer } from './reducers/user-reducer';

export interface AppState {
    logginUser: User;
}

export const reducers = {
    logginUser: userReducer
};


export function getState(store: Store<AppState>): AppState {
  let state: AppState;

  store.pipe(take(1)).subscribe(s => state = s);

  return state;
}
