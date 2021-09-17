import { useState, useContext } from "react";
import Button from "components/atoms/button";
import ExpenseViewer from "components/atoms/expense-viewer";
import Loader from "components/atoms/loader";
import ExpenseForm from "components/templates/expense-form";
import Row from "components/atoms/row";
import { filterByMonth, sumOfValue } from "utils";
import { Context } from "context";
import "./style.css";
function ExpenseManager() {
  const [state, setState] = useState(false);

  const { loading, expenses, deleteExpense } = useContext(Context);

  const onSave = () => {
    setState(!state);
  };

  const onCancel = () => {
    setState(!state);
  };

  const render = () => {
    const currentDate = new Date();
    const currentYear = String(currentDate.getFullYear());
    const currentMonth = String(currentDate.getMonth() + 1).padStart(2, "0"); // eg. currentMonth=09 for september
    const currentMonthStr = currentDate.toLocaleString("en-us", {
      month: "short",
    }); // eg. currentMonthStr=sept
    const filteredData = filterByMonth(expenses, currentMonth, currentYear);
    const currentMonthTotal = sumOfValue(filteredData, "amount");

    return (
      <div className="expense-manager">
        <ExpenseViewer label={currentMonthStr} value={currentMonthTotal} />
        <Button type="primary" onClick={() => setState(!state)}>
          Add +
        </Button>

        {state ? (
          <ExpenseForm onSave={onSave} onCancel={onCancel} />
        ) : (
          <div>
            <Row items={["Date", "Desc", "Cat", "Amt$", ""]} heading={true} />
            {expenses?.map((item, i) => {
              const { date, description, category, amount, id } = item;
              return (
                <ul className="row" key={`item-${i}`}>
                  <li className="row-item">{date}</li>
                  <li className="row-item">{description}</li>
                  <li className="row-item">{category}</li>
                  <li className="row-item">{amount}</li>
                  <li className="row-item">
                    <button className="btn" onClick={() => deleteExpense(id)}>
                      x
                    </button>
                  </li>
                </ul>
              );
            })}
          </div>
        )}
      </div>
    );
  };

  return loading && expenses?.length === 0 ? (
    <Loader show={loading} />
  ) : (
    render()
  );
}

export default ExpenseManager;
