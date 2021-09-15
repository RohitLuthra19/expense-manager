import "./style.css";

function Input({ onChange, type, id, name, placeholder, value, label }) {
  return (
    <div>
      {label && <label htmlFor={id}>{label}</label>}
      <input
        className="input"
        onChange={onChange}
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
      />
    </div>
  );
}

export default Input;
