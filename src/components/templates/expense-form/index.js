import Input from "components/atoms/input";
import Button from "components/atoms/button";
import "./style.css";

function ExpenseForm() {
  return (
    <div className="expense-form">
      <Input
        type="date"
        name="date"
        placeholder="Date"
        onChange={(e) => console.log(e.target.value)}
      />
      <Input
        type="text"
        name="category"
        placeholder="Category"
        onChange={(e) => console.log(e.target.value)}
      />
      <Input
        type="text"
        name="description"
        placeholder="Description"
        onChange={(e) => console.log(e.target.value)}
      />
      <Input
        type="number"
        name="amount"
        placeholder="Amount"
        onChange={(e) => console.log(e.target.value)}
      />

      <Button type="primary" onClick={() => console.log("add")}>
        Save
      </Button>
      <Button type="secondary" onClick={() => console.log("add")}>
        Cancel
      </Button>
    </div>
  );
}

export default ExpenseForm;
