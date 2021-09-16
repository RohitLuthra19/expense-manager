import "./style.css";

function Input({
  onChange,
  type,
  id,
  name,
  placeholder,
  value,
  label,
  required,
}) {
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
        required={required}
      />
    </div>
  );
}

export default Input;
