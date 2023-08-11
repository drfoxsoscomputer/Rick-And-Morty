import React from "react";
import { connect } from "react-redux";
import Card from "../Card/Card.jsx";

const Favorites = ({ myFavorites }) => {
  return (
    <div>
      {myFavorites?.map((character) => (
        <Card
          key={character.id}
          character={character}
        />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, null)(Favorites);
