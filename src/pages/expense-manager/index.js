import { useState, useContext } from "react";
import Button from "components/atoms/button";
import ExpenseViewer from "components/atoms/expense-viewer";
import ExpenseForm from "components/templates/expense-form";
import Row from "components/atoms/row";
import { Context } from "context";
import "./style.css";

function ExpenseManager() {
  const [state, setState] = useState(false);
  const { expenses } = useContext(Context);

  const onSave = () => {
    setState(!state);
  };

  const onCancel = () => {
    setState(!state);
  };

  return (
    <div className="expense-manager">
      <ExpenseViewer label="Sept" value="12345" />
      <Button type="primary" onClick={() => setState(!state)}>
        Add +
      </Button>

      {state ? (
        <ExpenseForm onSave={onSave} onCancel={onCancel} />
      ) : (
        <div>
          <Row items={["Date", "Desc", "Cat", "Amt$"]} heading={true} />
          {expenses?.map((item, i) => {
            return (
              <Row
                key={`item-${i}`}
                items={[
                  item?.date,
                  item?.description,
                  item?.category,
                  item?.amount,
                ]}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

export default ExpenseManager;
