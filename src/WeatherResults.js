import React from "react";

export default function WeatherResults() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h2>New York</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <ul>
            <li>Temperature: 10</li>
            <li>Cloudy</li>
            <li>Humidity: 75%</li>
            <li>Wind: 75 kph</li>
          </ul>
        </div>
        <div className="col-6">
          <img src="http://openweathermap.org/img/wn/01d.png" />
        </div>
      </div>
    </div>
  );
}
