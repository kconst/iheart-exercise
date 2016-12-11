import fetch from 'isomorphic-fetch';

export const SEARCH_ARTIST = 'SEARCH_ARTIST';
export const RECEIVE_ARTISTS_FAIL = 'RECEIVE_ARTISTS_FAIL';
export const RECEIVE_ARTISTS_SUCCESS = 'RECEIVE_ARTISTS_SUCCESS';

export function searchArtist(query) {
  return {
    type: SEARCH_ARTIST,
    // status: query.status,
    loading: true,
    query
  }
}

export function receiveArtistsFail(query, error) {
  return {
    type: RECEIVE_ARTISTS_FAIL,
    results: [],
    loading: false,
    error: error,
    timestamp: Date.now()
  }
}

export function receiveArtistsSuccess(query, json) {
  return {
    type: RECEIVE_ARTISTS_SUCCESS,
    loading: false,
    results: json,
    timestamp: Date.now()
  }
}

export function fetchArtists(artist) {
  return function (dispatch) {
    // set the search value
    dispatch(searchArtist(artist));

    return fetch(`//iheart-exercise-kconst.c9users.io:8081/search/artist/${artist}`)
      .then(response => response.json())
      .then(json => {
          return dispatch(receiveArtistsSuccess(artist, json));
        },
        error => {
          return dispatch(receiveArtistsFail([], error));
        });
  }
}