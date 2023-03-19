import "./CurrTemp.css";
import { weatherIcons } from "../../static/model";

export default function CurrTemp(props) {
  return (
    <div className="col-6">
      <img
        src={weatherIcons[props.icon] ? weatherIcons[props.icon] : ""}
        alt="N/A"
        width="80"
        height="80"
      />
      <br />
      <span className="current-temperature">{props.temp}°C</span>
    </div>
  );
}
