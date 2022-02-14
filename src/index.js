import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { FavvoritesContextProvider } from "./store/favorite-context";

ReactDOM.render(
  <FavvoritesContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </FavvoritesContextProvider>,
  document.getElementById("root")
);
