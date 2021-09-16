import { useState, createContext } from "react";

const Context = createContext();

export default function Provider({ children }) {
  const [expenses, setExpenses] = useState([
    {
      date: "12-09-2021",
      description: "bla bla bla",
      category: "A",
      amount: "199",
    },
    {
      date: "12-08-2021",
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
