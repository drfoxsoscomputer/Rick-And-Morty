import { useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./SearchBar.module.css";

const SearchBar = ({ onSearch }) => {
  const [id, setId] = useState("");
  const randomId = Math.floor(Math.random() * 826) + 1;
  const location = useLocation();

  // funcion para manejar el evento onChange
  const handleChange = (event) => {
    setId(event.target.value);
  };

  // funcion para manejar el evento onClick
  const handleSearch = () => {
    onSearch(id);
    //setId vacía el input
    setId("");
  };
  return (
    <div>
      {/* {location.pathname === "/home" && ( */}
        <input
          type="search"
          placeholder="Id..."
          onChange={handleChange}
          value={id}
        />
      {/* )} */}

      {/* {location.pathname === "/home" && ( */}
        <button
          className={styles.navLink}
          onClick={() => handleSearch()}
          // desactiva el botón si el input del id está vacío
          disabled={!id}>
          Add
        </button>
      {/* )} */}

      {/* El botón de Add Random se muestra si el usuario está en la página de Home */}
      {/* {location.pathname === "/home" && ( */}
      <button
        className={styles.navLink}
        onClick={() => onSearch(randomId)}>
        Add Random
      </button>
      {/* )} */}
    </div>
  );
};

export default SearchBar;
