import React, { Component } from "react";
import "../stylesheet/App.scss";
import pokedex from "../data/pokedex.json";
import Pokelist from "./Pokelist";

const App = () => {
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
};

export default App;
