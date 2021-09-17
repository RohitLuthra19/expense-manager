import React from "react";
import ReactDOM from "react-dom";
import "./global.css";
import "./normalize.css";
import ExpenseManager from "./pages/expense-manager";
import ContextProvider from "./context";
import makeServer from "./lib/server";

if (process.env.NODE_ENV === "development") {
  makeServer({ environment: "development" });
}

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <ExpenseManager />
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
