import "../stylesheet/App.scss";
import pokedexData from "../data/pokedex.json";
import Pokelist from "./Pokelist";
import { useState } from "react";

const App = () => {
  const [pokedex] = useState(pokedexData);

  return (
    <>
      <header className="header">
        <h1 className="header__title">My Pokédex</h1>
      </header>
      <main className="main">
        <div className="main__pokedex">
          <Pokelist pokedex={pokedex} />
        </div>
      </main>
    </>
  );
};

export default App;
