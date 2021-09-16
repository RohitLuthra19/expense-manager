import { useState, useContext } from "react";

import Input from "components/atoms/input";
import Button from "components/atoms/button";
import { Context } from "context";
import "./style.css";

function ExpenseForm({ onSave, onCancel }) {
  const [data, setData] = useState({
    date: "",
    description: "",
    category: "",
    amount: 0,
  });
  const [error, setError] = useState(false);
  const { addExpense } = useContext(Context);

  const onChange = (e) => {
    const { name, value } = e.target;
    setError(false);
    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    //Assumption date and amount is required
    if (data?.date !== "" && data?.amount !== 0) {
      addExpense(data);
      onSave();
    } else {
      setError(!error);
    }
  };

  return (
    <form className="expense-form">
      <Input
        type="date"
        name="date"
        placeholder="Date"
        value={data?.date}
        onChange={onChange}
      />
      <Input
        type="text"
        name="category"
        placeholder="Category"
        value={data?.category}
        onChange={onChange}
      />
      <Input
        type="text"
        name="description"
        placeholder="Description"
        value={data?.description}
        onChange={onChange}
      />
      <Input
        type="number"
        name="amount"
        placeholder="Amount"
        value={data?.amount}
        onChange={onChange}
      />

      <Button type="primary" onClick={handleSave}>
        Save
      </Button>
      <Button type="secondary" onClick={onCancel}>
        Cancel
      </Button>

      {error && (
        <span className="error-msg">(Date and Amount are required fields)</span>
      )}
    </form>
  );
}

export default ExpenseForm;
