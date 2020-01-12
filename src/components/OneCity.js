import './OneCity.css';
import axios from 'axios';
import React, {useEffect, useState} from 'react';


function OneCity (props) {
  var port = process.env.PORT || 8080;
  var host = process.env.PORT ? '0.0.0.0' : '127.0.0.1';
  const APIKEY = "b6907d289e10d714a6e88b30761fae22";
  const APIURL = "https://cors-anywhere.herokuapp.com/openweathermap.org/data/2.5/weather";
  // for local cors proxy:   const APIURL = "http://localhost:8010/proxy/data/2.5/weather";
  const cityName = props.data;

  const [weather, setWeather] = useState({
    temp : "(скоро будет)",
    humidity : "(скоро будет)",
});



  useEffect (
    function () {              
        axios.get(APIURL, { 
          params: {
            'q' : cityName, 
            'appid' : APIKEY
            }
          })
        .then((response) => {
          setWeather({
            temp: response.data.main.temp,
            humidity: response.data.main.humidity
          });
          
        }).catch((err) => {
          props.onNotFound();
          props.onDelete(cityName);
          
          })
      
      }, [cityName]);
      
  return (<div className="smallDiv">
            <p>Город: {props.data}</p>
            <p>Температура: {weather.temp} C</p>
            <p>Влажность: {weather.humidity}</p>
            <span className="delSpan" onClick={() => props.onDelete(cityName)}>X</span>
          </div>);
}

export default OneCity;