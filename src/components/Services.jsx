import React from "react";
import Navigation from "./Navigation";
import ServicesData from "./ServicesData";
import ServicesCard from "./ServicesCard";
import Footer from "./Footer";

const Services = () => {

    return (
        <>
            <h1 className="services_heading">Services</h1>
            <div>

            {
                ServicesData.map( (val)=>{
                    return(

                    <ServicesCard
                        image={val.images}
                        title={val.titles}
                        desc={val.descs}
                    />
                    )
                })
            }
            </div>

         <div className="footer_services">
    
         </div>
    
       
        </>
        
    )
}
export default Services;
