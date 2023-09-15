import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Form from "./components/Form/Form.jsx";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav.jsx";
import About from "./components/About/About.jsx";
import Detail from "./components/Detail/Detail.jsx";
import Error from "./components/Error/Error.jsx";
import Favorites from "./components/Favorites/Favorites.jsx";

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  // Estados de los componentes
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);

  // Funcion login con Express y async/await
  const login = async (userData) => {
    try {
      const { email, password } = userData;
      const URL = "http://localhost:3001/rickandmorty/login/";
      const { data } = await axios(`${URL}?email=${email}&password=${password}`);
      const { access } = data;
      setAccess(access);
      access && navigate("/home");

      if (access) {
        alert("¡Bienvenido!");
      } else {
        throw new Error();
      }
    } catch (error) {
      alert("Ups! Email o contraseña incorrectos.");
    }
  };

  // useEffect para validar el acceso al sistema si el email y el password coinciden con BD simulada, Si los datos ingresados (email y password) no coinciden con BD simulada o si el usuario ingresa manualmente /home u otra url, redirigira a la página de inicio ("locahost:3000" ó "/" que es donde esta el form del login)
  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  // Función para desloguearse del sistema
  const logout = () => {
    setAccess(false);
    // Reiniciar la página para que el usuario pueda volver a ingresar sus credenciales. y asi no queden cargadas tarjetas agregadas antes de desloguearse.
    !access && navigate("/");
    alert("¡Hasta pronto!");
    window.location.reload();
  };

  // Función async/await para agregar una tarjeta de un personaje
  const onSearch = async (id) => {
    if (isNaN(id) || id < 1 || id > 826) {
      alert(" Por favor, ingresa un número válido como ID (1-826).");
      return;
    }
    try {
      const { data } = await axios(`http://localhost:3001/rickandmorty/character/${id}`);
      if (!characters.find((char) => char.id === data.id)) {
        if (data.name) {
          setCharacters((oldCharacters) => [...oldCharacters, data]);
        }
      } else {
        alert(`Ups! El personaje con el id ${id} ya existe.`);
      }
    } catch (error) {
      alert(error);
    }
  };

  // Función para cerrar la carta de un personaje
  const onClose = (id) => {
    setCharacters(characters.filter((character) => character.id !== id));
  };

  return (
    <div className="App">
      {location.pathname !== "/" && (
        <Nav
          onSearch={onSearch}
          onLogout={logout}
        />
      )}

      <Routes>
        <Route
          path="/"
          element={<Form onLogin={login} />}
        />

        <Route
          path="/home"
          element={
            <Cards
              characters={characters}
              onClose={onClose}
            />
          }
        />

        <Route
          path="/favorites"
          element={<Favorites />}
        />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/detail/:id"
          element={<Detail onSearch={onSearch} />}
        />

        <Route
          path="*"
          element={<Error />}
        />
      </Routes>
    </div>
  );
}

export default App;

// Simulación de la BD donde está guardado el email y el password
// const EMAIL = "daprthefox@gmail.com";
// const PASSWORD = "asd123";
// Funcion login con Express
// const login = (userData) => {
//   const { email, password } = userData;
//   const URL = "http://localhost:3001/rickandmorty/login/";
//   // axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
//   axios(`${URL}?email=${email}&password=${password}`).then(({ data }) => {
//     const { access } = data;
//     setAccess(access);
//     access && navigate("/home");
//   });
// };

// Funcion login antes de Express
//! Función para validar el acceso al sistema si el email y el password coinciden con BD simulada
// const login = (userData) => {
//   if (userData.email === EMAIL && userData.password === PASSWORD) {
//     setAccess(true);
//     navigate("/home");
//   } else {
//     alert("Email o contraseña incorrectos.");
//   }
// };
// Función para para agregar una tarjeta de un personaje
// const onSearch = (id) => {
//   if (isNaN(id)) {
//     alert("Por favor, ingresa un número válido como ID.");
//     return;
//   }
//   // const URL = "https://rickandmortyapi.com/api/character/${id}`"
//   axios(`http://localhost:3001/rickandmorty/character/${id}`)
//     .then(({ data }) => {
//       if (!characters.find((char) => char.id === data.id)) {
//         if (data.name) {
//           setCharacters((oldCharacters) => [...oldCharacters, data]);
//         }
//       } else {
//         window.alert(`Ya existe un personaje con el id ${id}`);
//       }
//     })
//     .catch((err) => window.alert(err));
// };
