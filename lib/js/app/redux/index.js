import { combineReducers } from 'redux';
import collections from './reducers/collections';
import queries from './reducers/queries';
import ui from './reducers/ui';

import { appReducer } from '../modules/app';
import { savedQueryReducer } from '../modules/savedQuery';

export default combineReducers({
  app: appReducer,
  savedQuery: savedQueryReducer,
  collections,
  queries,
  ui,
});
