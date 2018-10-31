/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { connectRouter } from 'connected-react-router/immutable';
import history from 'utils/history';

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export default function createReducer() {
  // Wrap the root reducer and return a new root reducer with router state
  return connectRouter(history);
}
