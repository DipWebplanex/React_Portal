import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">Admission Portal</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/district-wise-college">District Wise College</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/merit-list">Merit List UG</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/registration-payment-status">Registration Payment Status</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/verify-payments">Verify Payments</Link>
          </li>
          {/* Add Document Upload link */}
          <li className="nav-item">
            <Link className="nav-link" to="/document-upload">Document Upload</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/profile">Profile</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
