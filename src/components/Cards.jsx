import Card from "./Card";

export default function Cards({ characters, onClose }) {
  return (
    <div>
      {characters.map(function (character) {
        return (
          <Card key={character.id} character={character} onClose={onClose} />
        );
      })}
    </div>
  );
}
