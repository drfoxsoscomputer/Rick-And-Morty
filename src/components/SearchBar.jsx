import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [id, setId] = useState("");

  const handleChange = (event) => {
    setId(event.target.value);
  };

  const handleSearch = () => {
    if (id.trim() !== "") {
      onSearch(id);
      setId("");
    }
  };

  return (
    <div>
      <input type="search" placeholder="Id..." onChange={handleChange} value={id} />
      <button onClick={handleSearch} disabled={id.trim() === ""}>
        Agregar
      </button>
    </div>
  );
}
