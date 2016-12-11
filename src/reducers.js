import { combineReducers } from 'redux';
import { SEARCH_ARTIST, RECEIVE_ARTISTS_FAIL, RECEIVE_ARTISTS_SUCCESS } from './actions.js';

function searchQuery(state = '', action) {
  switch (action.type) {
    case SEARCH_ARTIST:
      return Object.assign({}, action);

    default:
      return state;
  }
}

function results(list = [], action) {
  debugger;
  switch (action.type) {
    case RECEIVE_ARTISTS_FAIL:
    case RECEIVE_ARTISTS_SUCCESS:
      
      return action.results.concat([]);

    default:
      return list;
  }
}

const rootReducer = combineReducers({
  results,
  searchQuery
});

export default rootReducer