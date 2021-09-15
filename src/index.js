import React from "react";
import ReactDOM from "react-dom";
import "./global.css";
import "./normalize.css";
import ExpenseManager from "./components/pages/expense-manager";

ReactDOM.render(
  <React.StrictMode>
    <ExpenseManager />
  </React.StrictMode>,
  document.getElementById("root")
);
