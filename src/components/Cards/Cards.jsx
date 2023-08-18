import Card from "../Card/Card";
import style from "./Cards.module.css";

// componente container/smart
const Cards = ({ characters, onClose }) => {
  return (
    <div className={style.container}>
      {characters.map((character) => (
        <Card
          key={character.id}
          character={character}
          onClose={onClose}
        />
      ))}
    </div>
  );
};

export default Cards;
