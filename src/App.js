import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [weather, setWeather] = useState(null);
  const [input, setInput] = useState("");
  useEffect(() => {
    axios
      .get(
        `http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_WEATHER_API}&q=moscow&aqi=no`
      )
      .then((data) => {
        console.log(data.data);
        setWeather(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  //Event
  const weatherInput = (e) => {
    setInput(e.target.value);
  };
  const searchWeather = () => {
    axios
      .get(
        `http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_WEATHER_API}&q=${input}`
      )
      .then((data) => {
        setWeather(data.data);
      });
  };

  return (
    <div className="App">
      {weather && (
        <div>
          <div className="search">
            <input onChange={weatherInput} type="text"></input>
            <button type="submit" onClick={searchWeather}>
              Search
            </button>
          </div>
          <h1>Погода в {weather.location.name}</h1>
          <h2>{weather.location.region}</h2>
          <div className="condition">
            <h3>{weather.current.condition.text}</h3>
            <img src={weather.current.condition.icon}></img>
            <h4>Температура : {weather.current.temp_c}</h4>
            <h4>Ощущается как : {weather.current.feelslike_c}</h4>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
