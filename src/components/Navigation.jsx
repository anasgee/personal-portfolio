import React, { useState } from 'react';
import {NavLink} from 'react-router-dom';
import {GiHamburgerMenu} from 'react-icons/gi'


const Navigation = ()=>{
   const [showMenu,setShowMenu] = useState(false)

   return(
    <>
          

       <div className='main-nav'>
            <div className='left_nav'>

            <h1> Anas Raza</h1>

            </div>
            <div  className={ showMenu ? "right_nav mobile_nav ": "right_nav"}>

                  <ul>
                    <li><NavLink to="/" className="nav_link ">Home</NavLink></li>
                    <li><NavLink to="/services" className="nav_link ">Services</NavLink></li>
                    <li><NavLink to="/cv" className="nav_link ">CV</NavLink></li>
                    <li><NavLink to="/contact" className="nav_link ">Contact Us</NavLink></li>
                    <li><NavLink to="/about" className="nav_link ">About</NavLink></li>
                  </ul>


            </div>
                  <div className="mobile_menu">
                  <GiHamburgerMenu onClick={()=> setShowMenu(!showMenu)} className='hamburger'/>
                  </div>
       </div>

       

    </>
   )

}

export default Navigation;