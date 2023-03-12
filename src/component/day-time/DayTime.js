import "./DayTime.css";

export default function DayTime(props) {
  return (
    <div className="col-3 day-time">
      {props.time} <br />{" "}
      <span className="weather-description">{props.weatherDescription}</span>
    </div>
  );
}
