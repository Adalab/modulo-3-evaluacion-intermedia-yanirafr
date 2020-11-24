import "../stylesheet/App.scss";
import pokedexData from "../data/pokedex.json";
import Pokelist from "./Pokelist";
import { useState } from "react";
import Team from "./Team";

const App = () => {
  const [pokedex] = useState(pokedexData);
  const [team, setTeam] = useState(
    JSON.parse(localStorage.getItem("pokemon-team")) || []
  );
  //

  const handleClick = (id) => {
    const clickedId = parseInt(id);
    const teamAdd = pokedex.find((poke) => {
      return clickedId === parseInt(poke.id);
    });

    if (teamAdd) {
      if (team.length < 6) setTeam([...team, teamAdd.url]);
      localStorage.setItem("pokemon-team", JSON.stringify(team));
    }
  };

  const handleRemove = (id) => {
    const clickedId = parseInt(id);
    const teamRemove = team.find((poke) => {
      return clickedId === parseInt(team.indexOf(poke));
    });
    const removeIndex = team.indexOf(teamRemove);
    team.splice(removeIndex, 1);
    localStorage.setItem("pokemon-team", JSON.stringify(team));
  };

  return (
    <>
      <header className="header">
        <h1 className="header__title">My Pokédex</h1>
      </header>
      <main className="main">
        <div className="main__pokedex">
          <Team team={team} sendRemove={handleRemove} />
          <Pokelist pokedex={pokedex} sendClick={handleClick} />
        </div>
      </main>
    </>
  );
};

export default App;
