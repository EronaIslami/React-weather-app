import React, { useState } from 'react'; //6.9k (gzipped: 2.7k)
import "./WeatherApp.css"

import search_icon from "../Photos/search.png";
import cloud_icon from "../Photos/cloud.png";
import clear_icon from "../Photos/clear.png";
import rain_icon from "../Photos/rain.png";
import snow_icon from "../Photos/snow.png";
import broken_icon from "../Photos/broken-clouds.png";
import scattered_icon from "../Photos/scattered-clouds.png";
import shower_icon from "../Photos/shower-rain.png";
import humidity_icon from "../Photos/humidity.png";
import wind_icon from "../Photos/wind.png";
import clear_night from "../Photos/clear-night.png";
import snow_night from "../Photos/snow-night.png";
import cloud_night from "../Photos/cloud-night.png";
import rainynight_icon from "../Photos/rainynight.png";
import thunderstorm_icon from "../Photos/thunderstorm.png";
import backgroundVid from "../Photos/planet.mp4";


const WeatherApp = () => {
  let API_key = "50a37d8904d86df8f19799ab5d1d62bd";

  const [icon,setIcon] = useState(cloud_icon);

  const search = async () => { 
      const element = document.getElementsByClassName("cityInput");

      if(element[0].value === ""){
        return 0;
      }
      let url =`https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${API_key}`; 
      let response = await fetch(url);
      let data = await response.json();


      const humidity = document.getElementsByClassName("humidity-value");
      const wind = document.getElementsByClassName("wind-value");
      const temp = document.getElementsByClassName("weather-temperature");
      const location = document.getElementsByClassName("weather-location");

      humidity[0].innerHTML = data.main.humidity+" %";
      wind[0].innerHTML = data.wind.speed+" km/h";
      temp[0].innerHTML = (data.main.temp >= 0 ? Math.floor(data.main.temp) : Math.ceil(data.main.temp)) + " °C";
      location[0].innerHTML = data.name;

      if(data.weather[0].icon==="01d"){
        setIcon(clear_icon);
      }else if(data.weather[0].icon==="01n"){
        setIcon(clear_night);
      }
      else if(data.weather[0].icon==="02d"){
        setIcon(cloud_icon);
      }else if(data.weather[0].icon==="02n"){
        setIcon(cloud_night);
      }
      else if(data.weather[0].icon==="03d"){
        setIcon(scattered_icon);
      }else if(data.weather[0].icon==="03n"){
        setIcon(scattered_icon);
      }
      else if(data.weather[0].icon==="04d"){
        setIcon(broken_icon);
      }else if(data.weather[0].icon==="04n"){
        setIcon(broken_icon);
      }
      else if(data.weather[0].icon==="09d"){
        setIcon(shower_icon);
      }else if(data.weather[0].icon==="09n"){
        setIcon(shower_icon);
      }
      else if(data.weather[0].icon==="10d"){
        setIcon(rain_icon);
      }else if(data.weather[0].icon==="10n"){
        setIcon(rainynight_icon);
      }
      else if(data.weather[0].icon==="11d" || data.weather[0].icon==="11n"){
        setIcon(thunderstorm_icon);
      }
      else if(data.weather[0].icon==="13d"){
        setIcon(snow_icon);
      }else if(data.weather[0].icon==="13n"){
        setIcon(snow_night);
      }

      else{
        setIcon(clear_icon);
      }
  } 

  return (
    <div className='container'>
      <div className='backgroundVideo'>
        <video src={backgroundVid} autoPlay loop muted /></div>

    <div className='weather-container'>
      <div className='search'>
        <input type='text' className='cityInput' placeholder='Search'></input>
      <div className='search-icon' onClick={() => {search()}}>
        <img src={search_icon} alt="" height="30px" width="30px" />
      </div>
      </div>
      <div className='weather-image'>
        <img src={icon} alt="" height="130px" width="170px" />
      </div>
      <div className='weather-temperature'>? °C </div>
      <div className='weather-location'>Location</div>
      <div className='data-container'>
        <div className='element'>
          <img src={humidity_icon} alt="" height="60px" width="80px" className='icon'/>
          <div className='data'>
            <div className='humidity-value'>? %</div>
            <div className='text'>Humidity</div>
          </div>
        </div>
        <div className='element'>
          <img src={wind_icon} alt="" height="60px" width="80px" className='icon'/>
          <div className='data'>
            <div className='wind-value'>? km/h</div>
            <div className='text'>Wind Speed</div>
          </div>
        </div>
      </div>
    </div>
    
    </div>
  );
};

export default WeatherApp;





