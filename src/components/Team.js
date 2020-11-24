const Team = (props) => {
  const handleRemove = (ev) => {
    props.sendRemove(ev.currentTarget.id);
  };
  const team = props.team.map((poke, index) => {
    return (
      <li
        className="poke-team__item"
        key={index}
        id={index}
        onClick={handleRemove}
      >
        <img src={poke} alt="" />
      </li>
    );
  });
  return <ul className="poke-team">{team}</ul>;
};

export default Team;
