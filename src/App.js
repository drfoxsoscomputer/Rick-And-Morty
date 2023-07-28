import { useState } from "react";
import axios from "axios";
import "./App.css";
import Cards from "./components/Cards.jsx";
import Nav from "./components/Nav.jsx";

function App() {
  const [characters, setCharacters] = useState([]);

  // Función para obtener todos los personajes
  const onSearch = (id) => {
    if (isNaN(id)) {
      alert("Por favor, ingresa un número válido como ID.");
      return;
    }

    axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => {
        if (data.name) {
          const characterExists = characters.some(
            (character) => character.id === data.id
          );

          if (characterExists) {
            alert("Este personaje ya se encuentra en la lista.");
          } else {
            setCharacters((characters) => [...characters, data]);
          }
        } else {
          alert(`¡No hay personajes con el ID proporcionado!`);
        }
      })
      .catch((error) => {
        alert(
          `Ocurrió un error al obtener los datos de la API. Por favor, intenta nuevamente más tarde.`
        );
        console.error(error);
      });
  };

  // Función para obtener un personaje aleatorio
  const randomCharacter = () => {
    const randomId = Math.floor(Math.random() * 826) + 1;

    axios(`https://rickandmortyapi.com/api/character/${randomId}`)
      .then(({ data }) => {
        if (data.name) {
          const characterExists = characters.includes(data);

          if (characterExists) {
            alert("Este personaje ya se encuentra en la lista.");
          } else {
            setCharacters((characters) => [...characters, data]);
          }
        } else {
          alert(`¡No hay personajes con el ID proporcionado!`);
        }
      })
      .catch((error) => {
        alert(
          `Ocurrió un error al obtener los datos de la API. Por favor, intenta nuevamente más tarde.`
        );
        console.error(error);
      });
  };

  // Función para eliminar un personaje
  const onClose = (id) => {
    const charactersFiltered = characters.filter(
      (character) => character.id !== parseInt(id)
    );
    setCharacters(charactersFiltered);
  };

  return (
    <div className="App">
      <Nav onSearch={onSearch} onRandom={randomCharacter} />
      <Cards characters={characters} onClose={onClose} />
    </div>
  );
}

export default App;
