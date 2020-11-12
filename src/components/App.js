/* eslint-disable no-useless-constructor */
import React, { Component } from "react";
import "../stylesheet/App.scss";
import pokedex from "../data/pokedex.json";
import Pokelist from "./Pokelist";

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <header className="header"></header>
        <main className="main">
          <div className="pokedex">
            <Pokelist pokedex={pokedex} />
          </div>
        </main>
      </>
    );
  }
}

export default App;
