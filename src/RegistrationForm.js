import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './RegistrationForm.css';

const RegistrationForm = () => {
  const [name, setName] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [location, setLocation] = useState("");
  const navigate = useNavigate();

  const userDetails = { name, username, password, gender, location };

  const showAlert = () => {
    alert('user created successfully');
  }

  const LoginForm = () => {
    navigate('/login');
  }

  
  const formSubmit = async (e) => {
    e.preventDefault();
    console.log(userDetails);
    const url = 'http://localhost:5000/registers/';
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userDetails),
    };

    const response = await fetch(url, options);
    const data = await response.json();
    console.log(response);
    console.log(data);
    alert("register successfull")

  };

  return (
    <div className="empForm">
      <div className="section">
        <h1 className='head'>Register here...</h1>
        <form onSubmit={formSubmit} className='form-container'>
          <label htmlFor="name" className="input-label">Name:</label> <br />
          <input type="text" className="input-change" id="name" name='name' placeholder='name' onChange={(e) => setName(e.target.value)} /> <br />
          <label htmlFor="username" className="input-label">User Name:</label> <br />
          <input type="text" className="input-change" id="username" name='username' placeholder='user name' onChange={(e) => setUserName(e.target.value)} /> <br />
          <label htmlFor="password" className="input-label" >Password:</label> <br />
          <input type="text" className="input-change" id="password" name='password' placeholder='password' onChange={(e) => setPassword(e.target.value)} /> <br />
          <label htmlFor="gender" className="input-label">Gender:</label> <br />
          <input type="text" className="input-change" id="gender" name='username' placeholder='gender' onChange={(e) => setGender(e.target.value)} /> <br />
          <label htmlFor="location" className="input-label" >location:</label> <br />
          <input type="text" className="input-change" id="password" name='location' placeholder='location' onChange={(e) => setLocation(e.target.value)} /> <br />
          <div className='button-container'>
            <button type="submit" className="submit-button" onClick={showAlert}>Register</button>
            <button className="submit-button-login" onClick={LoginForm}>Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
