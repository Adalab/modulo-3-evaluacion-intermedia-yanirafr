import Pokemon from "./Pokemon";
import PropTypes from "prop-types";

const Pokelist = (props) => {
  const handleClick = (ev) => {
    props.sendClick(ev.currentTarget.id);
  };

  const pokemon = props.pokedex.map((poke) => {
    return (
      <li
        className="pokemon__card"
        key={poke.id}
        id={poke.id}
        title={poke.name}
        onClick={handleClick}
      >
        <img src={poke.url} alt={poke.name} className="pokemon__card__img" />
        <h2 className="pokemon__card__name">{poke.name}</h2>
        <Pokemon pokedex={poke} />
      </li>
    );
  });

  Pokemon.propTypes = {
    pokedex: PropTypes.object,
    id: PropTypes.number,
    name: PropTypes.string,
  };

  return <ul className="pokemon">{pokemon}</ul>;
};

export default Pokelist;
