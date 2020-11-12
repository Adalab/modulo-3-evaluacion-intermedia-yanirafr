/* eslint-disable no-useless-constructor */
import React, { Component } from "react";
import Pokemon from "./Pokemon";

class Pokelist extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props.pokedex);
    const pokemon = this.props.pokedex.map((poke, index) => {
      console.log(poke);
      return (
        <li className="pokemon__card" key={index} title={poke.name}>
          <img src={poke.url} alt={poke.name} className="pokemon__card__img" />
          <h2 className="pokemon__card__name">{poke.name}</h2>
          <Pokemon pokedex={poke} />
        </li>
      );
    });
    return <ul className="pokemon">{pokemon}</ul>;
  }
}

export default Pokelist;
