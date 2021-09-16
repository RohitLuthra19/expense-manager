import "./style.css";

function Row({ items, heading }) {
  return (
    <ul className={`row ${heading && "heading"}`}>
      {items?.map((item, i) => {
        return (
          <li className="row-item" key={`${item}-${i}`}>
            {item}
          </li>
        );
      })}
    </ul>
  );
}

export default Row;
