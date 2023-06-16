import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import { NavLink } from 'react-router-dom';


const Cv = ()=>{
    
   return(
    <>
 

    <div className='cv'>
       <NavLink to={require("./pdf/anascv.pdf")} ><button>Click To Download</button></NavLink>
    </div>

        
    </>
   )

}

export default Cv;