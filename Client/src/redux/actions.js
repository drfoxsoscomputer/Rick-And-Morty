import axios from "axios";
import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./actions-types.js";

const URL = "http://localhost:3001/rickandmorty";

//! Con Express y funcion async/await
export const addFav = (character) => {
  return async (dispatch) => {
    const endpoint = `${URL}/fav`;
    try {
      const { data } = await axios.post(endpoint, character);
      return dispatch({
        type: ADD_FAV,
        payload: data,
      });
    } catch (error) {
      alert(error);
    }
  };
};

//! Con Express y funcion async/await
export const removeFav = (id) => {
  return async (dispatch) => {
    const endpoint = `${URL}/fav/${id}`;
    try {
      const { data } = await axios.delete(endpoint);
      return dispatch({
        type: REMOVE_FAV,
        payload: data,
      });
    } catch (error) {
      alert(error);
    }
  };
};


export const filterCards = (gender) => {
  return {
    type: FILTER,
    payload: gender,
  };
};

export const orderCards = (order) => {
  return {
    type: ORDER,
    payload: order,
  };
};

//! Con Express
// export const addFav = (character) => {
//   const endpoint = "http://localhost:3001/rickandmorty/fav";
//   return (dispatch) => {
//     axios.post(endpoint, character).then(({ data }) => {
//       return dispatch({
//         type: ADD_FAV,
//         payload: data,
//       });
//     });
//   };
// };

//! Antes de Express
// export const addFav = (character) => {
//   return {
//     type: ADD_FAV,
//     payload: character,
//   };
// };
  //! Con Express
  // export const removeFav = (id) => {
  //   const endpoint = "http://localhost:3001/rickandmorty/fav/" + id;
  //   return (dispatch) => {
  //     axios.delete(endpoint).then(({ data }) => {
  //       return dispatch({
  //         type: REMOVE_FAV,
  //         payload: data,
  //       });
  //     });
  //   };
  // };
  
  //! Antes de Express
  //     export const removeFav = (id) => {
  //   return {
  //     type: REMOVE_FAV,
  //     payload: id,
  //   };
  // };