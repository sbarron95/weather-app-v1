import React, {useState} from "react";
export default function WeatherTemperature (props) {
    const [unit, setUnit] = useState('celsius');
    function showFahrenheit(event) {
        event.preventDefault();
        setUnit("fahrenheit")
    }

    function showCelsius (event) {
        event.preventDefault();
        setUnit("celsius")
    }
    if (unit === "celsius") {
    return (
        <div className="temperature"> {Math.round(props.celsius)} 
            <span className="unit"> 
            C </span> | {" "}
            <a href="/" onClick ={showFahrenheit}> F </a>
        </div> 
    );   
    } 
    else {
        let fahrenheit = (props.celsius * 9/5) + 32;
        return (
            <div className="temperature"> {Math.round(props.fahrenheit)}
                <span className="temperature"> {Math.round(props.fahrenheit)} </span>
                <span className="unit"> 
                C </span> | {" "}
                <a href="/" onClick ={showCelsius}> C </a>
            </div> 
        );   
    }
}

