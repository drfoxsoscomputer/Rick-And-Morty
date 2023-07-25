import { onSearch } from "../App";
export default function SearchBar({ onSearch }) {
  return (
    <div>
      <input type="search" />
      <button onClick={onSearch}>Agregar</button>
    </div>
  );
}
