import React, { Component } from "react";
import "../stylesheet/App.scss";
import pokedex from "../data/pokedex.json";
import Pokelist from "./Pokelist";

const App = () => {
  return (
    <>
      <header className="header"></header>
      <main className="main">
        <h1 className="main__title">Mi lista de Pokémon</h1>
        <div className="main__pokedex">
          <Pokelist pokedex={pokedex} />
        </div>
      </main>
    </>
  );
};

export default App;
