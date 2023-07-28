import "./App.css";
import Cards from "./components/Cards.jsx";
import Nav from "./components/Nav.jsx";
import { useState } from "react";
import axios from "axios";

function App() {
  const [characters, setCharacters] = useState([]);

  const onSearch = (id) => {
    // Validar si el ID ingresado es un número
    if (isNaN(id)) {
      alert("Por favor, ingresa un número válido como ID.");
      return;
    }

    axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.data)
      .then((data) => {
        if (data.name) {
          setCharacters((characters) => [...characters, data]);
        } else {
          alert(`¡No hay personajes con el ID proporcionado!`);
        }
      })
      .catch((error) => {
        alert(`¡No hay personajes con el ID proporcionado!`);
        console.error(error);
      });
  };

  const onClose = (id) => {
    const charactersFiltered = characters.filter(
      (character) => character.id !== Number(id)
    );
    setCharacters(charactersFiltered);
  };

  return (
    <div className="App">
      <Nav onSearch={onSearch} />
      <Cards characters={characters} onClose={onClose} />
    </div>
  );
}

export default App;
