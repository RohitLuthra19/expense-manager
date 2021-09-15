import "./style.css";

function Button({ children, onClick, type }) {
  return (
    <button
      className={`button ${type === "primary" ? "primary" : "secondary"}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
