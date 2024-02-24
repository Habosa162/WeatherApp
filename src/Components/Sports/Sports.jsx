import React, { useContext, useEffect, useState } from 'react'
import Style from "./Sports.module.css"
import {CountryContext}from "../../Context/CountryContext"
import axios from 'axios'
let key="5644e80989fe4942aa625857240101";
function Sports() {

  
  const { country } = useContext(CountryContext);
  let [matches,setMathes] = useState();

  const getMatchesData = async(APIKEY,country)=>{
    const matches = await axios.get(`http://api.weatherapi.com/v1/sports.json?key=${APIKEY}&q=${country}`).catch((err)=>{console.log(err);})
    setMathes(matches?.data.football) ; 
  }

    useEffect(()=>{
      getMatchesData(key,country)
    },[country])
  return (
   
   <div>
      
      <div className="row justify-content-center align-items-center text-center">

        {matches?.map((match,key)=>{
            return(
              <div className="col-md-4 border-start border-5 my-5" key={key}>
                  <h6 className='matchBetween text-center mb-4'>{match?.match}</h6>
                
                  <div className={Style.element} >
                    <i className="fa-solid fa-stopwatch-20 ms-3 w-25 text-success"></i>
                    <p className='Startin text-start w-50'>{match?.start}</p>
                  </div>


                  <div className={Style.element}>
                    <i className="fa-solid fa-trophy ms-3 w-25 text-warning"></i>
                    <p className='tournament text-start w-50'>{match?.tournament}</p>
                  </div>
                


                  <div className={Style.element}>
                    <i className="fa-solid fa-map-pin ms-3 w-25 text-danger"></i>
                    <p className='text-start text-start w-50'>{match?.stadium} Stadium</p>
                  </div>
            </div>)
        })}
  
      </div>

    </div>
  )
}

export default Sports