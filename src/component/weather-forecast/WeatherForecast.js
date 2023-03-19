import axios from "axios";
import { useState, useEffect } from "react";
import WeatherForecastDay from "../weather-forecast-day/WeatherForecastDay";

export default function WeatherForecast(props) {
  let [forecast, setForecast] = useState(null);

  function getForecast() {
    if (props.coords) {
      let latitude = props.coords.lat;
      let longitude = props.coords.lon;
      let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=3a94f3778290bfeee61278505dbbe51d&units=metric`;

      axios.get(apiUrl).then(function (response) {
        setForecast(response.data.daily.slice(1, 7));
      });
    }
  }

  useEffect(
    function () {
      getForecast();
    },
    [props.coords]
  );

  return (
    <div className="weatherForecast">
      <div className="row">
        {forecast &&
          forecast.map(function (dayData, index) {
            return <WeatherForecastDay key={index} data={dayData} />;
          })}
      </div>
    </div>
  );
}
