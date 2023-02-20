import { Component } from "react";
import "./card.style.css";
class Card extends Component {
  render() {
    const { name, email, id } = this.props.monsterPassing;
    return (
      <div className="card-container" key={id}>
        <img
          src={`https://robohash.org/${id}?set=set2&size=180x180`}
          alt={`monster ${name}`}
        />
        <h3 className="card-heading">{`${name}`}</h3>
        <p className="card-paragraph"><strong>Email:</strong>{` ${email}`}</p>
      </div>
    );
  }
}
export default Card;
