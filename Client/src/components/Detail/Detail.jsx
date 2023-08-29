import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import style from "./Detail.module.css";

const Detail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
    // axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
      data.name && setCharacter(data);
    });
    return setCharacter({});
  }, [id]);

  return (
    <div className={style.detail}>
      <img
        src={character.image}
        alt={character.name}
      />

      <div>
        <h1>{character.name}</h1>
        <h3>Status ➡ {character.status}</h3>
        <h3>Specie ➡ {character.species}</h3>
        <h3>Gender ➡ {character.gender}</h3>
        <h3>Origin ➡ {character.origin?.name}</h3>
        <h3>Location ➡ {character.location?.name}</h3>
      </div>
    </div>
  );
};

export default Detail;
