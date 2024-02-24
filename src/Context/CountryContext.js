import React, { useState } from 'react'
import {createContext,Context}from 'react'

export let CountryContext = createContext();

function CountryContextProvider(props) {
    const [country,setCountry] = useState("Egypt");

    console.log(props.children.props.children);
  return<CountryContext.Provider value={{country,setCountry}}>
        {props.children}
    </CountryContext.Provider>
  
}

export default CountryContextProvider