import "./App.css";
import WeatherForm from "./WeatherForm.js";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <WeatherForm />
      <p>
        Source code at{" "}
        <a href="https://github.com/eloveday/react-weather-app">Github</a>
      </p>
    </div>
  );
}
