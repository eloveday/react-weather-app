import React from "react";

export default function ForecastDay(props) {
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }
  console.log(props.data);
  let iconURL = `http://openweathermap.org/img/wn/${props.data.weather[0].icon}.png`;
  return (
    <div className="Forecast">
      <div className="container">
        <div className="row">
          <div className="col">{day()}</div>
        </div>
        <div className="row">
          <div className="col">
            <img src={iconURL} alt="icon" />
          </div>
        </div>
        <div className="row">
          <div className="col">
            {Math.round(props.data.temp.min)}° {Math.round(props.data.temp.max)}
            °
          </div>
        </div>
      </div>
    </div>
  );
}
