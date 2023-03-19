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
        <div className="col-md-6 col-sm-6 col-12 first-btn">
          <input
            className="btn btn-success "
            type="submit"
            value="Search"
          ></input>
        </div>
        <div className="col-md-6 col-sm-6 col-12 second-btn">
          <input
            className="btn btn-primary"
            type="button"
            onClick={handleCurrent}
            value="Current"
          ></input>
        </div>
      </div>
    </form>
  );
}
