import "./App.css";
import Card from "./components/Card.jsx";
import Cards from "./components/Cards.jsx";
import SearchBar from "./components/SearchBar.jsx";
import characters, { Rick } from "./data.js";

function App() {
   const onClose= () => window.alert("Emulamos que se cierra la card")
   function onSearch (characterID) {window.alert(characterID)}
  return (
    <div className="App">
      <SearchBar onSearch={onSearch} />
      <Cards characters={characters} onClose={onClose} />
      <Card character={Rick} onClose={onClose} />
    </div>
  );
}

export default App;

