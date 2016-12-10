import { combineReducers } from 'redux';
import { SEARCH_ARTIST, RECEIVE_ARTISTS } from './actions.js';

function searchQuery(state = '', action) {
  switch (action.type) {
    case SEARCH_ARTIST:
      return action.query;

    default:
      return state;
  }
}

function artistList(list = [], action) {
  switch (action.type) {
    case RECEIVE_ARTISTS:
      return action.artists.concat([]);

    default:
      return list;
  }
}

const rootReducer = combineReducers({
  artistList,
  searchQuery
});

export default rootReducer