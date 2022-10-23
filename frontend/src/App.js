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
import Footer from "./components/Footer.js"
import Upload from "./components/Upload.js"

function App() {
    const [settings, setSettings] = useState({
        "Name": false,
        "Email": false,
        "Website": false,
        "University": false,
        "Location": false,
    });

    const editSettings = (settings) => {
        let settingsObj = {
            "Name": settings[0],
            "Email": settings[1],
            "Website": settings[2],
            "University": settings[3],
            "Location": settings[4],
        }
        setSettings(settingsObj);
    }

    let dummmyData = [{
        'first_name': 'Mario',
        'last_name': 'Medel',
        'phone_number': '+3332325467',
        'website': undefined,
        'emails': 'mariom3del@gmail.com',
        'state': 'North Carolina',
        'country': 'United States',
        'city': 'Raleigh',
        'university_1': 'North Carolina State University',
        'education_1': 'B.Sc. in Computer Science;',
        'gpa_1': 'MAJOR GPA: 3.46/4.00',
        'location_1': 'Rock-Hill, SC',
        'university_2': 'Forsyth Technical Community College',
        'education_2': 'Associate in Engineering;',
        'gpa_2': 'GPA: 3.94/4.0',
        'location_2': 'Rock-Hill, SC',
        'education_count': 3,
        'job_1': 'BackEnd Software Engineering Intern on RV Home',
        'description_1': " Planned, designed, implemented, and presented a movie recommenedation system with a backend server for a winning full stack movie project using Golang for an engineering internship competition (2 day implementation) \n•Built a GoLang script that uses the WordPress API to remove duplicate images from over 1500+ articles, saving team resources \n•Spun down 10+ unused resources from AWS ECS using Terraform \n•New Grad ofer (Unaccepted) (Fall '23 start) ",
        'endDate_1': '2022-06-01',
        'job_2': 'Learning & development intern',
        'description_2': ' Design and Implemented front-end portfolio website, intructors voted best website out of 50+ interns evaluations \n•Presented and actively participated in public speaking activites to develop efective professional communication \n•Engaged in Udemy courses and group projects to learn Python, HTML, CSS, and SAAS ',
        'job_3': 'Intro to Programming student (Catarina class audit)',
        'location_3': 'Durham, NC',
        'description_3': ' Charted HTML, GIT, JS, and CSS skills from beginner to intermediate \n•Completed weekly excercises and semi-weekly projects to further develop problem-solving ',
        'work_count': 4,
        'skill_1': 'Hibernate (Java)',
        'skill_count': 1,
        'project': 'Projects Movie Recommendation & BackEnd Server | GitHub • FrontEnd/BackEnd web application where you input the name of a movie and the recommendation algorithm will provide you a list of recommendations based on the movies in the IMBD API • This was a team project with 4 total interns during an internal engineering competition. With only a 48 hour window, my focus was on developing a pattern matching algorithm for movies and implementing a small backend server using Golang and the net/HTTP package to serve results to frontend Connect Tic Tac Four | GitHub • A Python project integrated with GoDot. User vs bot where the winner of each Tic Tac Toe game goes first in Connect Four game Java Data Structures & Algorithms Library (school project) | GitHub • Eficient implementations of various data structures (hashmaps, graphs, trees, etc.) and searching algorithms (Dijkstra, BFS/DFS, Binary Search, etc.).',
        'approval_status': 0,
    },
    {
        'first_name': 'Cade',
        'last_name': 'Cuddy',
        'phone_number': '+1234567890',
        'website': 'www.cadecuddy.com',
        'emails': 'cadecuddy@gmail.com',
        'state': 'Texas',
        'country': 'United States',
        'city': 'Austin',
        'university_1': 'North Carolina State University',
        'education_1': 'B.S. in Computer Science;',
        'gpa_1': 'MAJOR GPA: 4.00/4.00',
        'location_1': 'Rock-Hill, SC',
        'education_count': 2,
        'job_1': 'Software Development Intern @ Amazon',
        'description_1': "Led the design and implementation of an internal computer vision classification feedback system, providing 4+ large CV teams with misclassification metrics.• Integrated feedback feature complete with CV misclassification data in existing codebase using Go,React, and multiple AWS services.• Launched feature on production environment, reporting data on 250+ misclassifications to CVengineers, improving model accuracy by 5%.",
        'endDate_1': '2022-06-01',
        'job_2': 'Machine Learning Intern @ Osmosis AI',
        'description_2': ' Design and Implemented front-end portfolio website, intructors voted best website out of 50+ interns evaluations \n•Presented and actively participated in public speaking activites to develop efective professional communication \n•Engaged in Udemy courses and group projects to learn Python, HTML, CSS, and SAAS ',
        'job_3': 'Intro to Programming student (Catarina class audit)',
        'location_3': 'Durham, NC',
        'description_3': ' Charted HTML, GIT, JS, and CSS skills from beginner to intermediate \n•Completed weekly excercises and semi-weekly projects to further develop problem-solving ',
        'work_count': 3,
        'skill_1': 'Java, Python, Rust, Javascript/Typescript, C, Go/Golang, HTML/CSS',
        'skill_count': 1,
        'project': 'Rocket Engine Testing Language Compiler Rust, Python Compiler for a custom rocket engine testing language written for easy use by technical/non-technical student engineers in the Liquid Rocketry Lab. Bedbreakr Javascript, React, AWS Amplify, Node.JS A blazing fast player statistics dashboard made for the Minecraft minigame Bedwars built with React and the Hypixel API. Zillow Guessing Game JavaScript, ReactJS, MongoDB, Node.JS Web app game where players compete to accurately guess home prices on Zillow-listed homes given only pictures scraped from 2,500+ listings. Spotify Web Player JavaScript, ReactJS, Express Browser-based music player web app powered by the Spotify API',
        'approval_status': 0
    }]

    // let applicants = fetch("http://localhost:5000/applicants");

    for (let i = 0; i < dummmyData.length; i++) {
        dummmyData[i]['applicant_id'] = i + 1;
    }
    // Assign each applicant an application status to determine which tab they should be in
    // 0 = Review
    // 1 = Complete
    // -1 = Rejected

    useEffect(() => {
        setReview(dummmyData);
        setComplete([]);
    }, []);

    const changeStatus = (applicant_id, status) => {
        console.log(applicant_id, dummmyData[applicant_id - 1]);
        dummmyData[applicant_id - 1]['approval_status'] = status;
        setReview(dummmyData);
        console.log(dummmyData);
    }

    const [review, setReview] = useState(dummmyData);
    const [complete, setComplete] = useState([]);

    return ( 
        <Router>
            <div >
                <header className = "text-3xl mt-8" >
                    <span className = "ml-16 select-none font-extrabold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600" ><a href="/">equihire</a></span> <Navbar / >
                </header>
                <Routes>
                    <Route path = "/"element = { < About / > }/> 
                    <Route path = "/screening" element = { < Review changeStatus={changeStatus} reviewList={review} completeList={complete} data={dummmyData} settings = { settings }/>} / >
                    <Route path = "/settings" element = { < Settings settings = { settings } editSettings = { editSettings }/>} / >
                    <Route path = "/upload" element = { < Upload /> }/>
                </Routes>
            </div> 
            <Footer / >
        </Router>);
    }

export default App;