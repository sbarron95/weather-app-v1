import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import WeatherSearch from "./WeatherSearch";
import weatherTemperature from "./WeatherTemperature";

function App() {
  return (
    <div className="App">
      <h1>Weather App1</h1>
      <WeatherSearch />
      <footer> Coded by Stephanie Barron using React, open-sourced on <a href="https://github.com/sbarron95/weather-app-v1">GitHub</a>, and hosted on Netlify</footer>
    </div>
  
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

reportWebVitals();