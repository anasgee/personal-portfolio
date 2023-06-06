import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./components/index.css";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from 'react-router';
import Home from './components/Home';
import Contact from './components/Contact';
import Cv from "./components/Cv";
import About from "./components/About";
import Services from './components/Services';



ReactDOM.render(
    <BrowserRouter>
    <App/>
    </BrowserRouter>
    ,
    document.getElementById("root")
);

