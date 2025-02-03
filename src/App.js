import './App.css';
import Layout from './Components/Layout/Layout';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import "../node_modules/font-awesome/css/font-awesome.css"
import React, { Component }  from 'react';

import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import Home from "./Components/Home/Home";
import Weather from "./Components/Weather/Weather";
import Sports from "./Components/Sports/Sports";
import CountryContextProvider from './Context/CountryContext.js'
function App() {


  const router = createBrowserRouter([
    {path:'/',element:<Layout />,children:[
      {path:'home',element:<Home />,children:[]},
      {path:'weather',element:<Weather />,children:[]},
      {path:'sports',element:<Sports />,children:[]},
      {path:'',element:'',children:[]},
      {path:'',element:'',children:[]},
      {path:'',element:'',children:[]},
      
    ]}
  ])
  return (
    <>
    <CountryContextProvider>
      <RouterProvider router={router}>
        <Layout></Layout>
      </RouterProvider>
    </CountryContextProvider>
    </>
  );
}

export default App;
