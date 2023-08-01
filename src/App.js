import "./App.css";
import axios from "axios";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Cards from "./components/Cards.jsx";
import Nav from "./components/Nav.jsx";
import About from "./components/About";
import Detail from "./components/Detail";
import Error from "./components/Error";

function App() {
  const [characters, setCharacters] = useState([]);

  // Función para cerrar la carta de un personaje
  const onClose = (id) => {
    const charactersFiltered = characters.filter(
      (character) => character.id !== parseInt(id)
    );
    setCharacters(charactersFiltered);
  };

  // Función para buscar un personaje
  const onSearch = (id) => {
    if (isNaN(id)) {
      alert("Por favor, ingresa un número válido como ID.");
      return;
    }

    axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => {
        if (data.id) {
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
      });
  };

  return (
    <div className="App">
      <Nav onSearch={onSearch} />

      <Routes>
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
