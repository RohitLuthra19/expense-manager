import "./style.css";

function Loader({ show }) {
  return (
    show && (
      <div className="loader-wrapper">
        <span className="loader" />
      </div>
    )
  );
}

export default Loader;
