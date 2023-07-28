import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [id, setId] = useState("");

  // funcion para manejar el evento onChange
  const handleChange = (event) => {
    setId(event.target.value);
  };

  // funcion para manejar el evento onClick
  const handleSearch = () => {
    // trim desactiva el botón de agregar cuando el id está vacío
    if (id.trim() !== "") {
      onSearch(id);
      //setId vacía el input
      setId("");
    }
  };

  return (
    <div>
      <input
        type="search"
        placeholder="Id..."
        onChange={handleChange}
        value={id}
      />
      <button onClick={handleSearch} disabled={id.trim() === ""}>
        Agregar
      </button>
    </div>
  );
}
