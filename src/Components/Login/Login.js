import React from 'react';
import { useState, useContext } from 'react';
import './Login.css';
import { FirebaseContext } from '../../store/Context';
import { useNavigate } from 'react-router-dom';
function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { firebase } = useContext(FirebaseContext);
  const handleSubmit = (e) => {
    e.preventDefault()
    firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
      navigate('/')
    }).catch((error) => {
      alert(error.message)
    })
  }
  return (
    <div>
      <div className='backgroud-image'>

      </div>
      <div className="loginParentDiv">
        <h2 className="header-text" >Login</h2>
        <br />
        <form onSubmit={handleSubmit}>
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
          <br />
          <label className="label" htmlFor="lname">Password</label>
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
          <button  >Login</button>
        </form>
        <br />
        <a className='label' onClick={() => {
          navigate('/signup')
        }}>Signup</a>
        <br />
      </div>
    </div>
  );
}

export default Login;
