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
        setExpenses((prevState) => [...prevState, data?.expenses]);
      });
  };

  const deleteExpense = async (id) => {
    await fetch(`${URL}/${id}`, {
      method: "delete",
      headers: { "Content-Type": "application/json" },
    })
      .then((data) => {
        const remainingItems = expenses.filter((item) => item.id !== id);
        setExpenses(remainingItems);
      })
      .catch((error) => console.log("error:", error));
  };

  return (
    <Context.Provider value={{ loading, expenses, addExpense, deleteExpense }}>
      {children}
    </Context.Provider>
  );
}

export { Context };
