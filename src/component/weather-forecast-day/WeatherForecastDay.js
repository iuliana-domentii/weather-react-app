import React from "react";
import CurrTemp from "../curr-temp/CurrTemp";

export default function WeatherForecastDay(props) {
  function maxTemp() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }
  function minTemp() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }
  return (
    <div>
      <div className="forecast-daily">{day()}</div>
      <div>
        {" "}
        <CurrTemp icon="01d" />{" "}
      </div>
      <div>
        <span className="daily-temp-max">{maxTemp()}</span>
        <span className="daily-temp-min">{maxTemp()}</span>
      </div>
    </div>
  );
}
