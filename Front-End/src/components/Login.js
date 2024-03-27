import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom'; // Corrected import
import '../css/login.css';
import { useLogin } from './LoginContext';

export default function Login() {
  const navigate = useNavigate(); // Corrected usage
  const { isLoggedIn, login, logout ,userType,typeUser,typeArtist} = useLogin(); // now we are using Context for login
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [selectedRole, setSelectedRole] = useState('');

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleRoleChange = (e) => setSelectedRole(e.target.value);

  const validate = (e) => {
    e.preventDefault();
    // Perform validation
    if (email === 'bhaskar@gmail.com') {
      if (password === 'bhaskar123') {
        if (selectedRole === 'user' || selectedRole === 'artist') {
          // Validation successful
          alert('Login successful!');
          // Redirect or perform further actions here
          if(selectedRole === "artist"){
            login(); //call login function from loginContext.js
            typeArtist();
            console.log("logged in as artist");
            navigate("/admin");
          }
          if(selectedRole === "user"){
            login(); //call login function from loginContext.js
            typeUser();
            console.log("logged in as user");
            navigate("/");
          }
        } else {
          alert('You have to choose a role: user or artist.');
        }
      } else {
        alert('Password is wrong.');
      }
    } else {
      alert('Email is wrong.');
    }
  };

  return (
    <div className="login-out-container">
      <div className="container text-center col-6">
        <div className="row">
          <div className="col left-div-login">
            <h1><strong>Login here</strong></h1>
            <form  className="login-form" onSubmit={validate}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <input type="email" className="form-control" id="email" value={email} onChange={handleEmailChange} aria-describedby="emailHelp" required />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input type="password" className="form-control" id="password" value={password} onChange={handlePasswordChange} required />
              </div>
              
              <div className="mb-3 form-check">
                <label className="form-check-label">Login as____</label>{" "}
                <input type="radio" name="loginRole" id="userLoginCheckbox" value="user" onChange={handleRoleChange} />
                <label htmlFor="userLoginCheckbox">User</label>
                <input type="radio" name="loginRole" id="artistLoginCheckbox" value="artist" onChange={handleRoleChange} />
                <label htmlFor="artistLoginCheckbox">Artist</label>
              </div>
              <button type="submit" className="btn btn-success">
                Submit
              </button>{" "}
              <button type="reset" className="btn btn-dark">
                Clear form
              </button>
            </form>
            <label>
              <strong>New User/Artist then</strong>
            </label>
            <NavLink to="/register" className={'col'}>
              <button type="button" className="btn btn-success">
                click here
              </button>
            </NavLink>
          </div>
        </div>
      </div>
      <NavLink to="/">
        <button type="button" className="btn btn-dark">
          Back to home page
        </button>
      </NavLink>
    </div>
  );
}
