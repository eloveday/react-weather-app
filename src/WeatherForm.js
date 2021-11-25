import React, { useState } from "react";
import axios from "axios";
import "./WeatherForm.css";

export default function WeatherForm() {
  let [city, changeCity] = useState(null);
  let [weatherMessage, showWeather] = useState(null);

  function setCity(cityName) {
    let newCityName = cityName.target.value;
    changeCity(newCityName);
  }
  function displayWeather(response) {
    showWeather(
      <div className="weather-results">
        <ul>
          <li>
            <b>Temperature:</b> {Math.round(response.data.main.temp)}°C
          </li>
          <li>
            <b>Description:</b> {response.data.weather[0].description}
          </li>
          <li>
            <b>Humidity:</b> {response.data.main.humidity}%
          </li>
          <li>
            <b>Wind:</b> {response.data.wind.speed}km/h
          </li>
          <li>
            <img
              src={`http://openweathermap.org/img/wn/${response.data.weather[0].icon}.png`}
              alt="Weather Icon"
            />
          </li>
        </ul>
      </div>
    );
  }
  function searchWeather(event) {
    event.preventDefault();
    let apiKey = "b0c4e3d6536928938df05e87e36cbcb5";
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiURL).then(displayWeather);
  }

  return (
    <div>
      <form>
        <input type="search" placeholder="Enter a city" onChange={setCity} />
        <input
          type="submit"
          className="btn btn-primary"
          value="Search"
          onClick={searchWeather}
        />
      </form>
      {weatherMessage}
    </div>
  );
}
