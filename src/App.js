import React, { useContext, useEffect } from "react";
import NavBar from "./Components/NavBar/NavBar";
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";
import { originals, action } from './urls'
import Home from "./Pages/Home";
import Signup from "./Pages/Signup"
import Login from "./Pages/Login";
import Favorites from "./Pages/Favorites";
import { AuthContext } from './store/Context'
import { FirebaseContext } from './store/Context'
function App() {
  const { setUser } = useContext(AuthContext);
  const { firebase } = useContext(FirebaseContext)
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
    })
  })
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path='/favorites' element={<Favorites />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
