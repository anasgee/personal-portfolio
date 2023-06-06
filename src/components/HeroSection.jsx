import React from "react";
import { NavLink } from "react-router-dom";
import ReactTyped from "react-typed";
import Anas from "./Anas";


const HeroSection=()=>{

    return(
        <>
           <section>
            <div className="hero">
                 <div className="left_hero">
                       <h3>Hi I am</h3>
                       <h1>Muhammad <span>Anas</span></h1>
                       <h4>I am passionate</h4>
                       <ReactTyped className="typed"
                            strings={[
                                "Website Developer",
                                "Web Designer",
                                "Graphic Designer",
                                "Freelancer",
                                "Youtuber"
                            ]}
                            typeSpeed={50}
                            backSpeed={15}
                            loop

                       />
                       <div className="btn">
                        <NavLink to="./cv" className="button"><button>Download CV</button></NavLink>
                        <NavLink to="./contact" className="button"><button>Contact Me</button></NavLink>
                 
                       </div>
                    
                 </div>
                 <div className="right_hero">
                   <Anas />
                 </div>
            </div>
           </section>
           
        </>
    )
}
export default HeroSection;