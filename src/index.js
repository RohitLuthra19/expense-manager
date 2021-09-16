import React from "react";
import ReactDOM from "react-dom";
import "./global.css";
import "./normalize.css";
import ExpenseManager from "./pages/expense-manager";
import ContextProvider from "./context";

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <ExpenseManager />
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
