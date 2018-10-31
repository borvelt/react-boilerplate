/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import { setState, newAction } from 'utils/store';
import { CHANGE_USERNAME } from './constants';
// The initial state of the App
export const initialState = {
  username: '',
};
setState(initialState);

newAction(CHANGE_USERNAME).onSucceed(action => ({
  global: { username: action.payload.replace(/@/gi, '') },
}));
