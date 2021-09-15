import Button from "components/atoms/button";
import ExpenseViewer from "components/atoms/expense-viewer";
import ExpenseForm from "components/templates/expense-form";

import "./style.css";
function ExpenseManager() {
  return (
    <div className="expense-manager">
      <ExpenseViewer label="Sept" value="12345" />
      <Button type="primary" onClick={() => console.log("add")}>
        Add +
      </Button>

      <ExpenseForm />
    </div>
  );
}

export default ExpenseManager;
