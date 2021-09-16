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
  const { addExpense } = useContext(Context);

  const onChange = (e) => {
    const { name, value } = e.target;
    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSave = () => {
    addExpense(data);
    onSave();
  };

  return (
    <div className="expense-form">
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
    </div>
  );
}

export default ExpenseForm;
