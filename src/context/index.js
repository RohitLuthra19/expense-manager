import { useState, createContext } from "react";

const Context = createContext();

export default function Provider({ children }) {
  const [expenses, setExpenses] = useState([
    {
      date: "2021-08-16",
      description: "bla bla bla",
      category: "A",
      amount: "199",
    },
    {
      date: "2021-09-16",
      description: "foo foo foo",
      category: "B",
      amount: "179",
    },
  ]);

  const addExpense = (item) => {
    setExpenses((prevState) => [...prevState, item]);
  };
  return (
    <Context.Provider value={{ expenses, addExpense }}>
      {children}
    </Context.Provider>
  );
}

export { Context };
