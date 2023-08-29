import SearchBar from "../SearchBar/SearchBar.jsx";
import { NavLink } from "react-router-dom";

const Nav = ({ onSearch, onLogout }) => {
  return (
    <nav>
      <NavLink to="/home">
        <button>Home</button>
      </NavLink>

      <NavLink to="/favorites">
        <button>Favorites</button>
      </NavLink>

      <NavLink to="/about">
        <button>About</button>
      </NavLink>

      <NavLink to="/home">
        <SearchBar onSearch={onSearch} />
      </NavLink>

      <NavLink to="/">
        <button onClick={onLogout}>LogOut</button>
      </NavLink>
      <hr />
    </nav>
  );
};

export default Nav;
