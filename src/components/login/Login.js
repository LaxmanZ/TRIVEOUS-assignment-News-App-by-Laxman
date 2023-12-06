import React from 'react';
import '../login/login.css';
import InputControll from '../inputcontrol/InputControll';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="container">
      <div className="innerBox">
        <h1 className="heading">Login</h1>
        <InputControll label="Email" placeholder="Enter Your Email" />
        <InputControll label="Password" placeholder="Enter Password" />

        <div className="footer">
          <button>Login</button>

          <p>
            Already have an account?{' '}
            <span>
              <Link to="/signup">Signup</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
