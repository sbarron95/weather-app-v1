import React from "react";
import WeatherIcon from "./WeatherIcon"
import "./WeatherDailyForecast.css"
export default function weatherDailyForecast() {
    return (
        <div className = "weatherDailyForecast">
        <div className="row">
        <div className="col">
           <div className="WeatherForecast-day"> Thu </div>
           <WeatherIcon code="01d" />
           <div className="WeatherForecast-temperatures" >
        <span className="WeatherForecast-temperature-max"> 19</span>
        <span className="WeatherForecast-temperature-min"> 10</span>
           </div>
        </div>
        </div>
        </div>
    )
}