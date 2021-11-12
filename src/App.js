import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";
import { originals, action } from './urls'
import Home from "./Pages/Home";
import Signup from "./Pages/Signup"
import Login from "./Pages/Login";


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={ <Home />} />
          <Route path="/signup" element={ <Signup />} />
          <Route path="/login" element={ <Login />} />
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
