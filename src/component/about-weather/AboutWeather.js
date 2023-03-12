export default function AboutWeather(props) {
  return (
    <div className="col-3 about-weather">
      Humidity: {props.humidity}
      % <br />
      Wind: {props.wind} km/h
    </div>
  );
}
