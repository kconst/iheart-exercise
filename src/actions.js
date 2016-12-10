import fetch from 'isomorphic-fetch';

export const SEARCH_ARTIST = 'SEARCH_ARTIST';
export const RECEIVE_ARTISTS = 'RECEIVE_ARTISTS';

export function searchArtist(query) {
  return {
    type: SEARCH_ARTIST,
    status: query.status,
    query
  }
}

export function receiveArtists(query, json) {
  return {
    type: RECEIVE_ARTISTS,
    query,
    artists: json,
    timestamp: Date.now()
  }
}

export function fetchArtists(artist) {
  return function (dispatch) {
    // set the search value
    dispatch(searchArtist(artist));

    return fetch(`//localhost:8080/search/artist/${artist}`)
      .then(response => response.json())
      .then(json => {
          return dispatch(receiveArtists(artist, json))
        }
      );
  }
}