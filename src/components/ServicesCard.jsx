import React from "react";
import { NavLink } from "react-router-dom";
const ServicesCard =(props)=>{
 
    return(
        <>
            <div className="services" id="services">
               <div className="cards">
                   <div className="card">
                       <img src={props.image} alt="img"/>
                       <h1>{props.title}</h1>
                       <p>{props.desc}</p>
                       <NavLink to="/contact" className="button"><button>Contact Us</button></NavLink>
                   </div>
               </div>

            </div>
        </>
    )
}

export default ServicesCard;