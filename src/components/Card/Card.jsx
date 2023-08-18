import { Link, useLocation } from "react-router-dom";
import style from "./Card.module.css";
import { addFav, removeFav } from "../../redux/actions.js";
import { connect } from "react-redux";
import { useState, useEffect } from "react";

// componente presentacional/dumb

const Card = ({ character, onClose, addFav, removeFav, myFavorites }) => {
  const { id, name, status, species, gender, origin, image } = character;

  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    isFav ? removeFav(id) : addFav({ id, name, status, species, gender, origin, image });
    setIsFav(!isFav);
  };

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);

  return (
    <div className={style.container}>
      <hr />
      <button
        className={style.favButton}
        onClick={handleFavorite}>
        {isFav ? "❤️" : "🤍"}
      </button>

      {/* El botón para cerrar la card se muestra solo en la página de home */}
      {useLocation().pathname === "/home" && (
        <button
          className={style.closeButton}
          onClick={() => onClose(id)}>
          ❌
        </button>
      )}

      <img
        className="img"
        src={image}
        alt={name}
      />

      <Link to={`/detail/${id}`}>
        <h2>{name}</h2>
      </Link>

      <p>{status}</p>
      <p>{species}</p>
      <p>{gender}</p>
      <p>{origin.name}</p>
      <hr />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => {
      dispatch(addFav(character));
    },
    removeFav: (id) => {
      dispatch(removeFav(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
