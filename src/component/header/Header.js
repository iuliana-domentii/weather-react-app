import "./Header.css";

export default function Header(props) {
  return (
    <div className="row">
      <div className="col-12 header">
        <h1>{props.city}</h1>
      </div>
    </div>
  );
}
