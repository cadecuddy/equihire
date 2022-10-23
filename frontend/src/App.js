import React, { useEffect, useState } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Navbar from "./components/Navbar.js"
import Review from "./components/Review/Review.js"
import Settings from "./components/Settings.js"
import About from "./components/About.js"

function App() {
    const [settings, setSettings] = useState({
        "Name": false,
        "ContactInfo": false,
        "Education": false,
        "Location": false,
    });

    const editSettings = (settings) => {
        let settingsObj = {
            "Name": settings[0],
            "ContactInfo": settings[1],
            "Education": settings[2],
            "Location": settings[3],
        }
        setSettings(settingsObj);
    }

    // let applicants = fetch("http://localhost:5000/applicants");

    // for (let applicant of applicants) {

    // }
    // Assign each applicant an application status to determine which tab they should be in
    // 0 = Review
    // 1 = Complete

    const [review, setReview] = useState([]);
    const [complete, setComplete] = useState([]);

    // useEffect(() => {
    //   console.log(settings);
    // }, [settings]);


    return ( 
        <Router>
            <div >
                <header className = "text-3xl mt-8" >
                    <span className = "ml-16 select-none font-extrabold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600" > equihire </span> <Navbar / >
                </header>
                <Routes>
                    <Route path = "/"element = { < About / > }/> 
                    <Route path = "/review" element = { < Review settings = { settings }/>} / >
                    <Route path = "/settings" element = { < Settings settings = { settings } editSettings = { editSettings }/>} / >
                </Routes>
            </div> 
        </Router>);
    }

export default App;