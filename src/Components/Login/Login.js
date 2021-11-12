import React from 'react';
import { useState,useContext } from 'react';
import {FirebaseContext} from '../../store/Context'
import Logo from '../../olx-logo.png';
import './Login.css';
import { useHistory } from 'react-router';
function Login() {
  const history =useHistory()
  const {firebase} =useContext(FirebaseContext)
  const [email, setEmail] = useState('');
  const [password,setPassword]=useState('');
  const handleLogin=(e)=>{
    e.preventDefault();
    firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
      history.push('/')
    }).catch((error)=>{
      alert(error.message)
    })
  }
  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            value={email}
            name="email"
            onChange={(e)=>{setEmail(e.target.value)}}
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            value={password}
            name="password"
            onChange={(e)=>{setPassword(e.target.value)}}
          />
          <br />
          <br />
          <button onClick={handleLogin} >Login</button>
        </form>
        <a onClick={()=>{
          history.push('/signup')
        }} >Signup</a>
      </div>
    </div>
  );
}

export default Login;
