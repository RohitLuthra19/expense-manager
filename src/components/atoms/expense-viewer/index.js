import "./style.css";

function ExpenseViewer({ label, value }) {
  return (
    <div className="expense-viewer">
      <div className="card label">{label}</div>
      <div className="card value">{value}</div>
    </div>
  );
}

export default ExpenseViewer;
