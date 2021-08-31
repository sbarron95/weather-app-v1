import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import axios from "axios";
import App from './WeatherSearch';
import reportWebVitals from './reportWebVitals';
import WeatherSearch from "./WeatherSearch";

import "./styles.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


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
