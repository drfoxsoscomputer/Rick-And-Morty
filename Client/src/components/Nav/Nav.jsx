import SearchBar from "../SearchBar/SearchBar.jsx";
import { NavLink } from "react-router-dom";
import logo from "../../utils/img/logoRaM.png";
import styles from "./Nav.module.css";

const Nav = ({ onSearch, onLogout }) => {
  return (
    <nav className={styles.navContainer}>
      <div>
        <img
          className={styles.logo}
          src={logo}
          alt="Rick And Morty"
        />
      </div>

      <NavLink
        className={({ isActive }) => (isActive ? styles.active : styles.navLink)}
        exact
        to="/home">
        Home
      </NavLink>

      <NavLink
        className={({ isActive }) => (isActive ? styles.active : styles.navLink)}
        exact
        to="/favorites">
        Favorites
      </NavLink>

      <NavLink
        className={({ isActive }) => (isActive ? styles.active : styles.navLink)}
        exact
        to="/about">
        About
      </NavLink>

      <NavLink to="/home">
        <SearchBar
          className={styles.search}
          onSearch={onSearch}
        />
      </NavLink>

      <NavLink
        to="/"
        className={styles.navLink}
        onClick={onLogout}>
        Log out
      </NavLink>
      {/* <hr className={styles.divider} /> */}
    </nav>
  );
};

export default Nav;
