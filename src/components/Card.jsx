import { Link } from "react-router-dom";

const Card = ({ character, onClose }) => {
  const { id, name, status, species, gender, origin, image } = character;
  return (
    <div id={id}>
      <hr />
      <button onClick={() => onClose(id)}>X</button>

      <Link to={`/detail/${id}`}>
        <h2>{name}</h2>
      </Link>
      <p>{status}</p>
      <p>{species}</p>
      <p>{gender}</p>
      <p>{origin.name}</p>
      <img src={image} alt={name} />
      <hr />
    </div>
  );
};

export default Card;
