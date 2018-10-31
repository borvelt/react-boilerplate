/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import { newAction, setState } from 'utils/store';
import { LOAD_REPOS } from './constants';

const initialState = {
  loading: false,
  error: false,
  currentUser: false,
  userData: {
    repositories: false,
  },
};

setState({ global: initialState });

newAction(LOAD_REPOS)
  .onStarted(() => ({
    global: { loading: true, error: false, userData: { repositories: false } },
  }))
  .onSucceed(action => ({
    global: {
      loading: false,
      error: false,
      userData: { repositories: action.payload.repos },
      currentUser: action.payload.username,
    },
  }))
  .onFailed(action => ({
    global: {
      loading: false,
      error: action.payload,
    },
  }));
