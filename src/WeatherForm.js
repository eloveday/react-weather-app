import React, { useState } from "react";
import axios from "axios";
import "./WeatherForm.css";

export default function WeatherForm() {
  let [city, changeCity] = useState(null);
  let [weatherMessage, showWeather] = useState(null);

  let [defaultTemp, changeTemp] = useState(10);
  let [defaultDescription, changeDescription] = useState("Cloudy");
  let [defaultHumidity, changeHumidity] = useState(75);
  let [defaultWind, changeWind] = useState(72);
  let [defaultCity, displayCityName] = useState("London");

  function setCity(cityName) {
    let newCityName = cityName.target.value;
    changeCity(newCityName);
  }
  function displayWeather(response) {
    changeTemp(Math.round(response.data.main.temp));
    changeDescription(response.data.weather[0].description);
    changeHumidity(response.data.main.humidity);
    changeWind(Math.round(response.data.wind.speed));
    displayCityName(response.data.name);
  }
  function searchWeather(event) {
    event.preventDefault();
    let apiKey = "b0c4e3d6536928938df05e87e36cbcb5";
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiURL).then(displayWeather);
  }

  return (
    <div>
      <form className="WeatherForm">
        <input type="search" placeholder="Enter a city" onChange={setCity} />
        <input
          type="submit"
          className="btn btn-primary ms-1"
          value="Search"
          onClick={searchWeather}
        />
      </form>
      {weatherMessage}
      <div className="container">
        <div className="row mt-2">
          <div className="col text-center">
            <h2>{defaultCity}</h2>
          </div>
          <div className="col text-center">Friday 17:00</div>
        </div>
        <div className="row">
          <div className="col text-center">
            <ul>
              <li className="text-capitalize">{defaultDescription}</li>
              <li>Humidity: {defaultHumidity}%</li>
              <li>Wind speed: {defaultWind} kph</li>
            </ul>
          </div>
          <div className="col text-center">
            <span className="temperature">{defaultTemp}</span>
            <span className="degrees">°C</span>{" "}
            <img
              src="http://openweathermap.org/img/wn/01d.png"
              alt="weather-icon"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
