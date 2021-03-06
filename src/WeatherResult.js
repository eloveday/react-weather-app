import React from "react";
import "./WeatherResult.css";

export default function WeatherResult(props) {
  return (
    <div className="WeatherResult">
      <div className="container">
        <div className="row mt-2">
          <div className="col text-center">
            <h2>{props.info.city}</h2>
          </div>
          <div className="col text-center"></div>
        </div>
        <div className="row">
          <div className="col text-center">
            <ul>
              <li className="text-capitalize">{props.info.description}</li>
              <li>Humidity: {props.info.humidity}%</li>
              <li>Wind speed: {props.info.wind} kph</li>
            </ul>
          </div>
          <div className="col text-center tempLine">
            <span className="temperature">{props.info.temperature}</span>
            <span className="degrees">°C</span>{" "}
            <img src={props.info.icon} alt="weather-icon" />
          </div>
        </div>
      </div>
    </div>
  );
}
