import axios from "axios";
import React, { useState } from "react";

export default function Forecast(props) {
  let [ready, setReady] = useState(false);
  let [forecastData, setForecastData] = useState(null);

  function displayForecast(response) {
    console.log(response.data);
    setForecastData({
      minTemp: Math.round(response.data.daily[0].temp.min),
      maxTemp: Math.round(response.data.daily[0].temp.max),
      icon: `http://openweathermap.org/img/wn/${response.data.daily[0].weather[0].icon}.png`,
    });
    setReady(true);
  }

  function getForecast() {
    let latitude = props.info.latitude;
    let longitude = props.info.longitude;
    let apiKey = "b0c4e3d6536928938df05e87e36cbcb5";
    let apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiURL).then(displayForecast);
  }

  if (ready) {
    return (
      <div className="Forecast">
        <div className="container">
          <div className="row">
            <div className="col">{forecastData.day}</div>
          </div>
          <div className="row">
            <div className="col">
              <img src={forecastData.icon} alt="icon" />
            </div>
          </div>
          <div className="row">
            <div className="col">
              {forecastData.minTemp}° {forecastData.maxTemp}°
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    getForecast();
    return null;
  }
}
