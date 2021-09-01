import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import WeatherSearch from "./WeatherSearch";

function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <WeatherSearch />
    </div>
  
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

reportWebVitals();