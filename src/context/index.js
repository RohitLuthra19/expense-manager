import { useEffect, useState, createContext } from "react";
import { URL } from "utils";

const Context = createContext();

export default function Provider({ children }) {
  const [loading, setLoading] = useState(false);
  const [expenses, setExpenses] = useState([]);

  const getExpenseList = async () => {
    setLoading((prevState) => !prevState);
    await fetch(URL)
      .then((response) => response.json())
      .then((json) => {
        setExpenses(json.expenses);
      });

    setLoading((prevState) => !prevState);
  };

  useEffect(() => {
    getExpenseList();
  }, []);

  const addExpense = async (item) => {
    await fetch(URL, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(item),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.expenses);
        setExpenses((prevState) => [...prevState, data?.expenses]);
      });
  };
  return (
    <Context.Provider value={{ loading, expenses, addExpense }}>
      {children}
    </Context.Provider>
  );
}

export { Context };
