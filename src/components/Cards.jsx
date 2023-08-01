import Card from "./Card";

const Cards = ({ characters, onClose }) => {
  return (
    <div>
      {characters.map((character) => (
        <Card key={character.id} character={character} onClose={onClose} />
      ))}
    </div>
  );
};

export default Cards;
