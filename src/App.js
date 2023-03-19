import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import AboutWeather from "./component/about-weather/AboutWeather";
import CurrTemp from "./component/curr-temp/CurrTemp";
import DayTime from "./component/day-time/DayTime";
import Header from "./component/header/Header";
import SearchBar from "./component/search-bar/SearchBar";
import Footer from "./component/footer/Footer";
import WeatherForecast from "./component/weather-forecast/WeatherForecast";

export default function App() {
  let [city, setCity] = useState("");
  let [humidity, setHumidity] = useState("");
  let [temp, setTemp] = useState("");
  let [wind, setWind] = useState("");
  let [time, setTime] = useState("");
  let [weatherDescription, setWeatherDescription] = useState("");
  let [icon, setIcon] = useState("");
  let [coords, setCoords] = useState("");

  function setCurrentTime() {
    let now = new Date();

    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let day = days[now.getDay()];
    let hour = now.getHours() < 10 ? `0${now.getHours()}` : `${now.getHours()}`;
    let minutes =
      now.getMinutes() < 10 ? `0${now.getMinutes()}` : `${now.getMinutes()}`;
    let dayTime = `${day} ${hour}:${minutes}`;

    setTime(dayTime);
  }

  function searchCallback(city) {
    getWeatherData(city);
  }

  function currentCallback() {
    navigator.geolocation.getCurrentPosition(function (position) {
      const lat = Math.round(position.coords.latitude * 100) / 100;
      const lon = Math.round(position.coords.longitude * 100) / 100;
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=3a94f3778290bfeee61278505dbbe51d&units=metric`;

      axios.get(apiUrl).then(
        function (response) {
          setCurrentTime();
          setCoords(response.data.coord);
          setWeatherDescription(response.data.weather[0].description);
          setCity(response.data.name);
          setTemp(Math.round(response.data.main.temp));
          setHumidity(response.data.main.humidity);
          setWind(Math.round(response.data.wind.speed));
        },
        function (error) {
          console.error(error);
          alert("Please, enter a valid city name!");
        }
      );
    });
  }

  function getWeatherData(city) {
    city = city.trim();
    if (city) {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3a94f3778290bfeee61278505dbbe51d&units=metric`;
      axios.get(url).then(
        function (response) {
          setCurrentTime();
          setCoords(response.data.coord);
          setWeatherDescription(response.data.weather[0].description);
          setCity(response.data.name);
          setTemp(Math.round(response.data.main.temp));
          setHumidity(response.data.main.humidity);
          setWind(Math.round(response.data.wind.speed));
          setIcon(response.data.weather[0].icon);
        },
        function (error) {
          console.error(error);
          alert("Please, enter a valid city name!");
        }
      );
    }
  }

  useEffect(function () {
    getWeatherData("Bern");
  }, []);

  return (
    <div className="app">
      <div className="container">
        <Header city={city} />
        <div className="row">
          <AboutWeather humidity={humidity} wind={wind} />
          <CurrTemp temp={temp} icon={icon} />
          <DayTime time={time} weatherDescription={weatherDescription} />
        </div>
        <SearchBar
          searchCallback={searchCallback}
          currentCallback={currentCallback}
        />
        <WeatherForecast coords={coords} />
      </div>
      <Footer />
    </div>
  );
}
