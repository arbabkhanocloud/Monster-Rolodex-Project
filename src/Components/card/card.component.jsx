import "./card.style.css";

const Card = ({ monsterPassing }) => {
  const { name, email, id } = monsterPassing;
  return (
    <div className="card-container" key={id}>
      <img
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
        alt={`monster ${name}`}
      />
      <h3>{`${name}`}</h3>
      <p>{`Email: ${email}`}</p>
    </div>
  );
};
export default Card;
