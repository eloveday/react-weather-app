import React, { useState } from "react";
import axios from "axios";
import "./WeatherForm.css";
import WeatherResult from "./WeatherResult";
import DateFormatting from "./DateFormatting.js";
import Forecast from "./Forecast.js";

export default function WeatherForm(props) {
  let [city, changeCity] = useState(props.defaultCity);
  let [weatherData, setWeatherData] = useState({ ready: false });

  function displayWeather(response) {
    setWeatherData({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      wind: Math.round(response.data.wind.speed),
      city: response.data.name,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}.png`,
      date: new Date(response.data.dt * 1000),
      coordinates: response.data.coord,
    });
  }
  function Search() {
    let apiKey = "b0c4e3d6536928938df05e87e36cbcb5";
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiURL).then(displayWeather);
  }

  function setCity(cityName) {
    changeCity(cityName.target.value);
  }

  function handleClick(event) {
    event.preventDefault();
    Search();
  }
  if (weatherData.ready) {
    return (
      <div>
        <div className="date">
          <DateFormatting date={weatherData.date} />
        </div>
        <div className="container">
          <form className="WeatherForm">
            <div className="row">
              <div className="col">
                {" "}
                <input
                  type="search"
                  placeholder="Enter a city"
                  onChange={setCity}
                />{" "}
                <input
                  type="submit"
                  className="btn btn-primary ms-1"
                  value="Search"
                  onClick={handleClick}
                />
              </div>
            </div>
          </form>
        </div>
        <WeatherResult info={weatherData} />
        <Forecast info={weatherData.coordinates} />
      </div>
    );
  } else {
    Search();
    return "Loading...";
  }
}
