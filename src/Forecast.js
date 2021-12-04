import axios from "axios";
import React, { useState } from "react";
import ForecastDay from "./ForecastDay.js";

export default function Forecast(props) {
  let [ready, setReady] = useState(false);
  let [forecastData, setForecastData] = useState(null);

  function displayForecast(response) {
    setForecastData(response.data.daily);
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
    return <ForecastDay data={forecastData[1]} />;
  } else {
    getForecast();
    return null;
  }
}
