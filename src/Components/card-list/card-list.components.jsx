import "./card-list.style.css";
import Card from "../card/card.component.jsx";

const CardList = ({ monsters }) => (
  <div className="card-list">
    {monsters.map((monster) => {
      return <Card monsterPassing={monster} key={monster.id} />;
    })}
  </div>
);
export default CardList;
