import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import './App.css'
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";
import {originals,action} from './urls'
import Home from "./Pages/Home";
import Signup from "./Pages/Signup"

function App() {
  return (
   <div>
    <Signup/>
   </div>
  );
}

export default App;
