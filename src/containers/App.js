import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchArtists } from './../actions';
import Tiles from '../components/Tiles';

import './../styles/global.scss';

class App extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(query) {
    const value = query.target.value;

    // if a bad value is received, ignore it
    if (!value) {
      return;
    }

    // debounce
    clearTimeout(this.timeout);

    this.timeout = setTimeout(() => {
      this.props.dispatch(fetchArtists(value));
    }, 500);
  }

  render() {
    return (
      <div className="App">
        <input className="search" onChange={ this.handleChange } type="text" placeholder="Search artist"/>
        { (() => {
          if (this.props.artists[0] && !this.props.artists[0].description) {
            return <p>
              Results for { this.props.searchQuery }
            </p>
          }
        })() }
        <Tiles data={ this.props.artists.slice(0, 6) }/>
      </div>
    )
  }
}

App.propTypes = {
  artists: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  const { searchQuery, artistList } = state;

  return {
    searchQuery: searchQuery || '',
    artists: artistList || []
  }
}

export default connect(mapStateToProps)(App);