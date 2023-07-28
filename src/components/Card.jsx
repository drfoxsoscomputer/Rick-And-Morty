export default function Card({ character, onClose }) {
  const { id, name, status, species, gender, origin, image } = character;
  return (
    <div id={id}>
      <hr />
      <button onClick={() => onClose(id)}>X</button>
      <h2>{name}</h2>
      <p>{status}</p>
      <p>{species}</p>
      <p>{gender}</p>
      <p>{origin.name}</p>
      <img src={image} alt={name} />
      <hr />
    </div>
  );
}
