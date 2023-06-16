import React from 'react';
import { Route, Routes } from 'react-router';
import Home from './Home';
import Contact from './Contact';
import Cv from "./Cv";
import About from "./About";
import Services from './Services';
import Error from './Error';
import Navigation from './Navigation';
import Footer from './Footer';





const App = () => {

    return (
        <>
        
            <Navigation/>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/personalPortfolio' element={<Home />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/cv' element={<Cv />} />
                <Route path='/about' element={<About />} />
                <Route path='/services' element={<Services />} />
                <Route path='/*' element={<Error />} />
            </Routes>
                <Footer/>



        </>
    )

}

export default App;