import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
      data.name && setCharacter(data);
    });
    return setCharacter({});
  }, [id]);

  return (
    <div>
      <hr/>
      <h1>{character?.name}</h1>
      <img
        src={character?.image}
        alt={character?.name}
      />
      <h3>{character?.status}</h3>
      <h3>{character?.species}</h3>
      <h3>{character?.gender}</h3>
      <h3>{character?.origin?.name}</h3>
    </div>
  );
};

export default Detail;
