import React, { useContext, useEffect, useState } from 'react'
import Style from "./Weather.module.css";
import axios from 'axios'
import { CountryContext } from '../../Context/CountryContext';
let key = '5644e80989fe4942aa625857240101';

function Weather() {
  const { country } = useContext(CountryContext);
  const [weather, setWeather] = useState();


  const getWeatherData = async (APIKEY, country) => {
    let WeatherResponse = await axios
      .get(`http://api.weatherapi.com/v1/current.json?key=${APIKEY}&q=${country}&aqi=no`)
      .catch((err) => { console.log(err); });
    setWeather(WeatherResponse?.data);
  }
  useEffect(() => {
    if (country !== null) {
      getWeatherData(key, country)
    } else {
      console.log("choose country first")
    }
  }, [country]);
  return (
    <div>
      <div className="row justify-content-center align-items-center">
        <div className="col-md-8 row">
    
    
          <div className="col-md-12 d-flex justify-content-around align-items-center my-5">
            <div className="countryName d-flex-row">
              <h2>{weather?.location.country} , {weather?.location.name}</h2>
              <h6>{weather?.location.region}</h6>
            </div>
            <div className="condition">
              <img src={weather?.current.condition.icon} className='img-fluid' alt="" />
              <h4 className=''>{weather?.current.condition.text}</h4>
            </div>
            <div className="time mx-5">
              <h6>{weather?.location.localtime}</h6>
              <h6>{weather?.location.tz_id}</h6>

            </div>
          </div>
     
     
     
          <div className="col-md-6 d-flex-row  border-end border-dark border-5 ">
            <div className="element d-flex justify-content-between align-items-center">
              <p>Temperature in celsius</p>
              <p>{weather?.current.temp_c}</p>
            </div>
            <div className="element d-flex justify-content-between align-items-center">
              <p>Temperature in fahrenheit</p>
              <p>{weather?.current.temp_f}</p>
            </div>
            <div className="element d-flex justify-content-between align-items-center">
              <p>Wind speed in miles per hour</p>
              <p>{weather?.current.wind_mph}</p>
            </div>


          </div>
     
     
     
          <div className="col-md-6 d-flex-row  ">
            <div className="element d-flex justify-content-between align-items-center">
              <p>Wind speed in kilometer per hour</p>
              <p>{weather?.current.wind_kph}</p>
            </div>
            <div className="element d-flex justify-content-between align-items-center">
              <p>Wind direction in degrees</p>
              <p>{weather?.current.wind_degree}</p>
            </div>
            <div className="element d-flex justify-content-between align-items-center">
              <p>Humidity</p>
              <p>{weather?.current.humidity}</p>
            </div>
          </div>
        </div>
      </div>

      {/* <button onClick={()=>{
                      console.log(weather);            
          }}>clcllclc</button> */}
    </div>
  )
}

export default Weather