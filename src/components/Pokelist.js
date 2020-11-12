import Pokemon from "./Pokemon";

const Pokelist = (props) => {
  const pokemon = props.pokedex.map((poke, index) => {
    return (
      <li className="pokemon__card" key={index} title={poke.name}>
        <img src={poke.url} alt={poke.name} className="pokemon__card__img" />
        <h2 className="pokemon__card__name">{poke.name}</h2>
        <Pokemon pokedex={poke} />
      </li>
    );
  });

  return <ul className="pokemon">{pokemon}</ul>;
};

export default Pokelist;
