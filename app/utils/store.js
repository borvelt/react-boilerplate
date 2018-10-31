import { State, Action } from 'redux-peach';
import history from './history';
import configureStore from '../configureStore';

const initialState = {};
const store = configureStore(initialState, history);
const setState = newState => State.set(newState, store);
const findAction = actionName => Action.find(actionName, store);
const newAction = actionName =>
  Action()
    .setName(actionName)
    .hookToStore(store);

export { store, history, setState, findAction, newAction };
