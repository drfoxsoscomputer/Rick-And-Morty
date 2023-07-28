export default function Card({ character, onClose }) {
  const { id, name, status, species, gender, origin, image } = character;
  return (
    <div id={id}>
      <hr />
      <button onClick={() => onClose(id)}>X</button>
      <h2>{name}</h2>
      <h2>{status}</h2>
      <h2>{species}</h2>
      <h2>{gender}</h2>
      <h2>{origin.name}</h2>
      <img src={image} alt={name} />
      <hr />
    </div>
  );
}
