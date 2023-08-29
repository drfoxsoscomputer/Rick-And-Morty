import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import "../src/index.css";
import App from "./App";
import store from "./redux/store.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
// console.log(store.getState().myFavorites);
// ReactDOM.createRoot(document.getElementById("root")).render(
//   // <Provider store={store}>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   // </Provider>
// );
