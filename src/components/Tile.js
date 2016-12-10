import React, { PropTypes, Component } from 'react';

export default class Tile extends Component {
  render() {
    const { name, description, image } = this.props;

    return (
      <li className="Tile">
        <img src={ image } alt={ name }/>
        <h2>
          { name }
        </h2>

        <p>
          { description }
        </p>
      </li>
    )
  }
}

Tile.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};