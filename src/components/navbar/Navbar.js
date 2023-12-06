import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-4">
        <div className="container-fluid flex flex-between ">
          <a className="navbar-brand" href="/">
            <b className="fs-3">TechZoro</b>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/news">
                  News
                </a>
              </li>
            </ul>
          </div>

          <div className="">
            <button className="px-4 py-2 br-2 rounded-pill ">
              <Link className="text-decoration-none" to="/login">
                Login
              </Link>
            </button>
            <button className="px-4 py-2 br-2 rounded-pill ">
              <Link className="text-decoration-none" to="/signup">
                Signup
              </Link>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
