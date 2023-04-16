import React from 'react';
import { Link } from 'react-router-dom';

export function NavBar(){
    return (
      <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/home/">
              Bank Home Page
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/createaccount"
                  >
                    Create Account
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/login/">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/deposit/">
                    Deposit
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/withdraw/">
                    Withdraw
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/alldata/">
                    All Data
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
}