import React from 'react';
import './Signup.css';
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router';

export default function Signup() {
  const navigate=useNavigate()
  const [username, setUstername] = useState();
  const [email, setEmail] = useState()
  const [phone, setPhone] = useState();
  const [password, setPassword] = useState();
  

  return (
    <div>
      <div className="signupParentDiv">
      <h2 className="header-text" >Sign In</h2>
      <br />
        <form onSubmit=''>
          <label className="label" htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            value={username}
            name="name"
            onChange={(e) => setUstername(e.target.value)}
          />
          <br />
          <label className="label" htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            value={email}
            name="email"
            onChange={(e) => { setEmail(e.target.value) }}
          />
          <br />
          <label className="label" htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            id="lname"
            value={phone}
            name="phone"
            onChange={(e) => { setPhone(e.target.value) }}
          />
          <br />
          <label className="label" htmlFor="lname">Password</label>
          {/* { error ? <h6 style={{color:"red"}} >{error}</h6> :''} */}
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            value={password}
            name="password"
            onChange={(e) => { setPassword(e.target.value) }}
          />
          <br />
          <br />
          <button >Signup</button>
        </form>
        <br />
        <a className="label" onClick={()=>{
          navigate('/login')
        }}>Login</a>
        <br />
      </div>
    </div>
  );
}
