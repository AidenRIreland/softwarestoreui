import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Home from './Home';
import { Login } from "./Login";
import { Register } from "./Register";

function App() {
  const [currentForm, setCurrentForm] =useState('login');
  const toggleForm =(formName)=>{
    setCurrentForm(formName);
  }
  return (
    <Router>
        <div className="App">
          <head>
          <meta charset="utf-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <title>MySoftwareStore</title>
          </head>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/login">Login</Link>
                <Link to=""></Link>
            </nav>
            <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />} />
                </Routes>
        </div>
    </Router>
);
}

export default App;
