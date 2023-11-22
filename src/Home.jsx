import React,{useState} from "react";
import './Home.css'; // Specific CSS
import logo from './mysoftwarestorewebp.png'
const Home = () => {
    return (
        <div className="home">
            <img src={logo}alt="Software Store Logo" style={{ float: 'left', marginRight: '20px' }} />
            <h1>Welcome to mySoftwareStore </h1>
        </div>
    );
};

export default Home;