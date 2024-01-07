import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';
import './LoginForm.css';

const LoginForm = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  // const history = useHistory();

  const userDetails = { username, password };

  const RegisterForm = () => {
    navigate('RegistrationForm');
  }


  const formSubmit = async (e) => {
    e.preventDefault();
    console.log(userDetails);
    const url = 'http://localhost:5000/login/';
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

    if (response.ok) {
      // Assuming the server returns a JWT token upon successful login
      const jwtToken = data.jwt_token;

      // Save the token to local storage
      localStorage.setItem('jwtToken', jwtToken);

      // Navigate to the dashboard or any other component
      navigate('/');
    
    }
  };

  return (
    <div className="empForm">
      <div className="section">
        <h1 className='head'>Log in to VTrendz</h1>
        <form onSubmit={formSubmit} className='form-container'>
          <label htmlFor="username" className="input-label">User Name:</label> <br />
          <input type="text" className="input-change" id="username" name='username' placeholder='user name' onChange={(e) => setUserName(e.target.value)} /> <br />
          <label htmlFor="password" className="input-label" >Password:</label> <br />
          <input type="text" className="input-change" id="password" name='password' placeholder='password' onChange={(e) => setPassword(e.target.value)} /> <br />
          <div className='button-container'>
            <button type="submit" className="submit-button">Log in</button> <br/>
          </div>
        </form>
        {/* <a href="">Forgotten account?</a><br/> */}
        <button type="button" className='create-button' onClick={RegisterForm} >Create new account</button>
      </div>
    </div>
  );
};

export default LoginForm;
