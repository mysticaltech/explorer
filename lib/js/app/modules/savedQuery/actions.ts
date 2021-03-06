import {
  UPDATE_SAVED_QUERY,
  RESET_SAVED_QUERY,
  SAVE_QUERY_SUCCESS,
  SELECT_SAVED_QUERY,
} from './constants';

import { SavedQueryActions, ReducerState } from './types';

export const updateSaveQuery = (
  properties: Partial<ReducerState>
): SavedQueryActions => ({
  type: UPDATE_SAVED_QUERY,
  payload: properties,
});

export const selectSavedQuery = (name: string): SavedQueryActions => ({
  type: SELECT_SAVED_QUERY,
  payload: {
    name,
  },
});

export const resetSavedQuery = (): SavedQueryActions => ({
  type: RESET_SAVED_QUERY,
});

export const saveQuerySuccess = (): SavedQueryActions => ({
  type: SAVE_QUERY_SUCCESS,
});
