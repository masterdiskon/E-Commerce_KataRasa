import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import AppRouter from "../router.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <AppRouter />
  </BrowserRouter>,
  document.getElementById("root")
);
