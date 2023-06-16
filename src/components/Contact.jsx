import React, { useState } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';


const Contact = ()=>{

    const [data, setData] = useState({
        email:'',
        num:'',
        text:''
    });
    
    const inputEvent =(e)=>{
        const {name, value} = e.target;
        setData((prev)=>({
          ...prev,
          [name]:value
        }))
      
    }
    console.log(data)
    const submit =() =>{
        return(
            alert(`Your Email:  ${data.email} 
                  Your Number: ${data.num} 
                  Your Suggessions : ${data.text} `)
        )
        
    }
    
   return(
    <>
   
            <form>

        <div className='form_div'>
              <div className='form'>

                <lablel>Email</lablel>
                <input   onChange={inputEvent} name='email' value={data.email} type='email' placeholder='Enter your Email'/>
            
                <lablel>Phone Number</lablel>
                <input  onChange={inputEvent} name='num' value={data.num} type='number' placeholder='Enter your Number'/>
            
                <lablel>Suggession</lablel>
                <textarea onChange={inputEvent} name='text' value={data.text} placeholder='enter your suggessions'></textarea>

                <button onClick={submit} className='button'>Submit</button>
            
              </div>
        </div>
            </form>


    </>
   )

}

export default Contact;