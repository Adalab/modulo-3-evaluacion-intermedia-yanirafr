import PropTypes from "prop-types";

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
        <img
          className="poke-team__image"
          src={poke.url}
          alt={poke.name}
          title={poke.name}
        />
      </li>
    );
  });

  return (
    <div className="poke-team">
      <h2 className="poke-team__title">My team:</h2>
      <ul className="poke-team__list">{team}</ul>
    </div>
  );
};

Team.propTypes = {
  sendRemove: PropTypes.func,
  url: PropTypes.string,
  name: PropTypes.string,
};

export default Team;
