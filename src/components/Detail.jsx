import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Card from "./Card";

const Detail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      }
    );
    return setCharacter({});
  }, [id]);

  return (
  <div>
    {/* <Card character={character} /> */}
    <h1>{character?.name}</h1>
    <h3>{character?.status}</h3>
    <h3>{character?.species}</h3>
    <h3>{character?.gender}</h3>
    <h3>{character?.origin?.name}</h3>
    <img src={character?.image} alt={character?.name} />
    </div>)
};

export default Detail;
