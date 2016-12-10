import React, { PropTypes, Component } from 'react';
import Tile from './Tile';

export default class Tiles extends Component {
  render() {
    return (
      <ul>
      { (() => {
        if (this.props.data.length > 0) {
          return this.props.data.map((tile, i) =>
            <Tile
              key={ i }
              { ...tile }
            />
          )
        } else {
          return <h4>No results were found from your query.</h4>;
        }
      })() }
  </ul>
    )
  }
}

Tiles.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  }).isRequired).isRequired
};