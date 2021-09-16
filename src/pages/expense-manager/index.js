import { useState } from "react";
import Button from "components/atoms/button";
import ExpenseViewer from "components/atoms/expense-viewer";
import ExpenseForm from "components/templates/expense-form";
import Row from "components/atoms/row";
import "./style.css";

function ExpenseManager() {
  const [state, setState] = useState(false);

  const data = [
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
  ];

  return (
    <div className="expense-manager">
      <ExpenseViewer label="Sept" value="12345" />
      <Button type="primary" onClick={() => setState(!state)}>
        Add +
      </Button>

      {state ? (
        <ExpenseForm
          onSave={() => setState(!state)}
          onCancel={() => setState(!state)}
        />
      ) : (
        <div>
          <Row items={["Date", "Desc", "Cat", "Amt$"]} heading={true} />
          {data?.map((item, i) => {
            return (
              <Row
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
