// import { connect } from "react-redux";
// import { useState } from "react";
import Card from "../Card/Card.jsx";
import { filterCards, orderCards } from "../../redux/actions.js";
import { useDispatch, useSelector } from "react-redux";
import style from "./Favorites.module.css";

const Favorites = () => {
  const dispatch = useDispatch();

  // const [aux, setAux] = useState(false);

  const myFavorites = useSelector((state) => state.myFavorites);

  const handleOrder = (event) => {
    dispatch(orderCards(event.target.value));
    // setAux(!aux);
  };

  const handleFilter = (event) => {
    dispatch(filterCards(event.target.value));
  };

  return (
    <div>
      <select
        placeholder="Gender"
        onChange={handleFilter}>
        {["All Favorites", "Male", "Female", "Genderless", "unknown"].map((gender, id) => (
          <option
            key={id}
            value={gender}>
            {gender}
          </option>
        ))}
      </select>

      <select
        placeholder="Order"
        onChange={handleOrder}>
        {["Ascendente", "Descendente"].map((order, id) => (
          <option
            key={id}
            value={order}>
            {order}
          </option>
        ))}
      </select>

      {/* <select onChange={handleOrder}>
        <option value="Ascendente">Ascendente</option>
        <option value="D">Descendente</option>
      </select> */}

      {/* <select onChange={handleFilter}>
        <option value="All">All Favorites</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="unknown">unknown</option>
      </select> */}

      {/* <Cards characters={myFavorites} /> */}
      <div className={style.container}>
        {myFavorites?.map((character) => (
          <Card
            key={character.id}
            character={character}
          />
        ))}
      </div>
    </div>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     myFavorites: state.myFavorites,
//   };
// };

// export default connect(mapStateToProps, null)(Favorites);
export default Favorites;
