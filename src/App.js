import React, { useEffect } from 'react'
import './App.css';
import axios from 'axios';

function App() {
  useEffect ( () => {
    axios.get('http://api.weatherapi.com/v1/current.json?key=34c281611c34485b8e6101749213008&q=moscow&aqi=no').then( data => {
      console.log(data);
    })
  },[])
  return (
    <div className="App">

    </div>
  );
}

export default App;
