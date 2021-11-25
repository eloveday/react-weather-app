import React from "react";
import "./WeatherResults.css";

export default function WeatherResults() {
  return (
    <div className="container">
      <div className="row mt-2">
        <div className="col text-center">
          <h2>New York</h2>
        </div>
        <div className="col text-center">Friday 17:00</div>
      </div>
      <div className="row">
        <div className="col text-center">
          <ul>
            <li>Cloudy</li>
            <li>Humidity: 75%</li>
            <li>Wind: 75 kph</li>
          </ul>
        </div>
        <div className="col text-center temperature">
          10C{" "}
          <img
            src="http://openweathermap.org/img/wn/01d.png"
            alt="weather-icon"
          />
        </div>
      </div>
    </div>
  );
}
