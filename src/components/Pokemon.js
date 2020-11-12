/* eslint-disable no-useless-constructor */
import React, { Component } from "react";

class Pokemon extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const types = this.props.pokedex.types.map((type, index) => {
      return (
        <li className="pokemon__card__type" key={index}>
          {type}
        </li>
      );
    });
    return <ul className="pokemon__card__types">{types}</ul>;
  }
}

export default Pokemon;
