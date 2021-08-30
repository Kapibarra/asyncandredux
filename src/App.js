import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [weather, setWeather] = useState(null);
  useEffect(() => {
    axios
      .get(
        "http://api.weatherapi.com/v1/current.json?key=34c281611c34485b8e6101749213008&q=moscow&aqi=no"
      )
      .then((data) => {
        console.log(data.data)
        setWeather(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="App">
      {weather && (
        <div>
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
