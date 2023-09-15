import SearchBar from "../SearchBar/SearchBar.jsx";
import { NavLink } from "react-router-dom";
import styles from "./Nav.module.css";

const Nav = ({ onSearch, onLogout }) => {
  return (
    <nav className={styles.navContainer}>
      <NavLink
        // className={styles.navLink}
        exact
        to="/home"
        className={styles.active}>
        Home
      </NavLink>

      <NavLink
        // className={styles.navLink}
        exact
        to="/favorites"
        className={styles.active}>
        Favorites
      </NavLink>

      <NavLink
        exact
        to="/about"
        className={styles.active}>
        About
      </NavLink>

      <NavLink to="/home">
        <SearchBar onSearch={onSearch} />
      </NavLink>

      <NavLink
        exact
        to="/"
        className={styles.active}
        onClick={onLogout}>
        LogOut
      </NavLink>
      <hr className={styles.divider} />
    </nav>
  );
};

export default Nav;
