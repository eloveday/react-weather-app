import "./App.css";
import WeatherForm from "./WeatherForm.js";

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
