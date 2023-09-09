import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./actions-types.js";

const initialState = {
  myFavorites: [],
  allFavorites: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAV:
      return {
        ...state,
        myFavorites: action.payload,
        allFavorites: action.payload,
      };

    //! Antes de Express
    // case ADD_FAV:
    //   // const addFav = [...state.allFavorites, action.payload];
    //   return {
    //     ...state,
    //     myFavorites: [...state.allFavorites, action.payload],
    //     allFavorites: [...state.allFavorites, action.payload],
    //   };

    //! Con Express
    case REMOVE_FAV:
      return {
        ...state,
        myFavorites: action.payload,
        allFavorites: action.payload,
      };

    //! Antes de Express
    // case REMOVE_FAV:
    //   // const removeFav = state.myFavorites.filter((fav) => fav.id !== action.payload);
    //   return {
    //     ...state,
    //     myFavorites: state.myFavorites.filter((fav) => fav.id !== Number(action.payload)),
    //     allFavorites: state.myFavorites.filter((fav) => fav.id !== Number(action.payload)),
    //   };

    case FILTER:
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
      };
    default:
      return { ...state };
  }
};

export default reducer;
