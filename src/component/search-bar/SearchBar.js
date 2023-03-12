import { useState } from "react";
import "./SearchBar.css";

export default function SearchBar(props) {
  let [city, setCity] = useState("");

  function updateCity(event) {
    setCity(event.target.value);
  }

  function handleSearch(event) {
    event.preventDefault();
    props.searchCallback(city);
    setCity("");
  }
  function handleCurrent() {
    props.currentCallback();
    setCity("");
  }

  return (
    <form onSubmit={handleSearch}>
      <div className="row">
        <input
          className="search"
          value={city}
          type="text"
          placeholder="Enter a city"
          onChange={updateCity}
        ></input>
      </div>
      <div className="row">
        <div className="col-6">
          <input
            className="btn btn-success first-btn"
            type="submit"
            value="Search"
          ></input>
        </div>
        <div className="col-6">
          <input
            className="btn btn-primary second-btn"
            type="button"
            onClick={handleCurrent}
            value="Current"
          ></input>
        </div>
      </div>
    </form>
  );
}
