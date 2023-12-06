import React from 'react';
import '../signup/signup.css';
import InputControll from '../inputcontrol/InputControll';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div className="container">
      <div className="innerBox">
        <h1 className="heading">Signup</h1>
        <InputControll label="Name" placeholder="Enter Your Name" />
        <InputControll label="Email" placeholder="Enter Your Email" />
        <InputControll label="Password" placeholder="Enter Password" />

        <div className="footer">
          <button>Signup</button>

          <p>
            Don't have an account?{' '}
            <span>
              <Link to="/login">Login</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
