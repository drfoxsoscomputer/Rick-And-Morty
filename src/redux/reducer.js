import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./actions-types.js";

const initialState = {
  myFavorites: [],
  allFavorites: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAV:
      // const addFav = [...state.allFavorites, action.payload];
      return {
        ...state,
        myFavorites: [...state.allFavorites, action.payload],
        allFavorites: [...state.allFavorites, action.payload],
      };

    case REMOVE_FAV:
      // const removeFav = state.myFavorites.filter((fav) => fav.id !== action.payload);
      return {
        ...state,
        myFavorites: state.myFavorites.filter((fav) => fav.id !== Number(action.payload)),
        allFavorites: state.myFavorites.filter((fav) => fav.id !== Number(action.payload)),
      };

    case FILTER:
      // const filteredGender = state.allFavorites.filter((character) => character.gender === action.payload);
      return {
        ...state,
        myFavorites: action.payload === "All Favorites" ? [...state.allFavorites] : state.allFavorites.filter((character) => character.gender === action.payload),
      };

    case ORDER:
      let ordered = [];
      if (action.payload === "Ascendente") {
        ordered = state.myFavorites.sort((a, b) => (a.id > b.id ? 1 : -1));
      } else {
        ordered = state.myFavorites.sort((a, b) => (b.id > a.id ? 1 : -1));
      }

      return {
        ...state,
        myFavorites: [...ordered],
        // myFavorites: action.payload === "Ascendente" ? state.myFavorites.sort((a, b) => a.id - b.id) : state.myFavorites.sort((a, b) => b.id - a.id),
      };
    // 1:23
    default:
      return { ...state };
  }
};

export default reducer;
