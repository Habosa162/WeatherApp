import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import {Outlet} from 'react-router-dom'
function Layout() {
    return(<>
    
        <Navbar></Navbar>
        <div className="container">
        <Outlet></Outlet>
        </div>
        {/* <Footer></Footer> */}
    </>)
}

export default Layout