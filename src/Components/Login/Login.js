import React from 'react';
import { useState,useContext } from 'react';
import './Login.css';
function Login() {
  const [email, setEmail] = useState('');
  const [password,setPassword]=useState('');
 
  return (
    <div>
      <div className="loginParentDiv">
      <h2 className="header-text" >Login</h2>
      <br />
        <form>
          <label className="label"  htmlFor="fname">Email</label>
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
          <br />
          <label className="label"  htmlFor="lname">Password</label>
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
          <button  >Login</button>
        </form>
        <a onClick=''>Signup</a>
      </div>
    </div>
  );
}

export default Login;
