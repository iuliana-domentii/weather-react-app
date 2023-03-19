import "./WeatherForecastDay.css";
import { weatherIcons } from "../../static/model";

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

  function iconSrc() {
    return weatherIcons[props.data.weather[0].icon]
      ? weatherIcons[props.data.weather[0].icon]
      : "";
  }

  return (
    <div className="col-md-2 col-sm-4 col-6 forecast-daily">
      <div>{day()}</div>
      <div>
        <img src={iconSrc()} alt="N/A" width="42" />
      </div>
      <div>
        <span className="daily-temp-max">{maxTemp()}</span>
        <span className="daily-temp-min">{minTemp()}</span>
      </div>
    </div>
  );
}
