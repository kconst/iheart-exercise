import React, { PropTypes, Component } from 'react';
import Tile from './Tile';

export default class Tiles extends Component {
  render() {
    return (
      <ul>
      { this.props.data.map((tile, i) =>
        <Tile
          key={ i }
          { ...tile }
        />
      ) }
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