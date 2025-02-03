import React, { useContext } from 'react';
import Style from "./Navbar.module.css";
import {Link} from 'react-router-dom';
import {CountryContext} from "../../Context/CountryContext"
function Navbar() {


let {setCountry}= useContext(CountryContext) ; 
   
   return (<>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand" href="home">WeatherNews</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="home">Home</Link>
                        </li>  
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="weather">Weather</Link>
                        </li>  
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="sports">Football</Link>
                        </li>  
                    </ul>


                    <div className="btn dropdown">
                        <button className="nav-link dropdown-toggle" type='button' role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Choose Country
                        </button>
                        <ul className="dropdown-menu mr-auto">
                            <li><button className="dropdown-item" type='button' onClick={()=>{setCountry("Egypt")}} value={"Egypt"} name="Egypt" >Egypt</button></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><button className="dropdown-item" type='button' onClick={()=>{setCountry("London")}}>United Kingdom</button></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><button className="dropdown-item" type='button' onClick={()=>{setCountry("Germany")}}>Germany</button></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><button className="dropdown-item" type='button' onClick={()=>{setCountry("Riyadh")}}>Saudi Arabia</button></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><button className="dropdown-item" type='button' onClick={()=>{setCountry("Dubai")}}>United Arab Emirates</button></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><button className="dropdown-item" type='button' onClick={()=>{setCountry("Spain")}}>Spain</button></li>
                      
                        </ul>
                    </div>

                </div>
            </div>
        </nav>




    </>)
}


export default Navbar