const Pokemon = (props) => {
  const types = props.pokedex.types.map((type, index) => {
    return (
      <li className="pokemon__card__type" key={index}>
        {type}
      </li>
    );
  });
  return <ul className="pokemon__card__types">{types}</ul>;
};

export default Pokemon;
