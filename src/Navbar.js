import React from 'react'
import Nlogo1 from './Nlogo1.png'
import './Navbar.css'
import NavDrawer from './NavDrawer'


const Navbar = ( {setCategory} ) => {
    return (
        <div className="navbar">
                  
            <img src={Nlogo1} alt="Logo" />
             
            <div className="menu">
           <NavDrawer setCategory={setCategory} /> 
          </div>
            
        </div>
    )
}

export default Navbar
