import SearchBar from "./SearchBar";

export default function Nav ({ onSearch, onRandom }) {
  return (
    <nav>
      <SearchBar onSearch={onSearch} />
      <button onClick={onRandom}>Random</button>
    </nav>
  );
};