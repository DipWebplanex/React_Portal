// HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import './HomePage.css';
import './Navbar.css'; // Import Navbar styles

function HomePage() {
  return (
    <div className='container'>
      <Navbar />
      <div className='mt-4'>
        <h1 className='display-4 text-center mb-4 main-heading'>Welcome to Admission Portal</h1>
        <p className='lead intro-paragraph'>
          Welcome to our Admission Portal, where you can find all the information
          you need to apply for admissions. Whether you're a prospective student,
          parent, or administrator, we're here to help you through the process.
        </p>

        <div className='my-5 features-section'>
          <h2 className='mb-4 section-heading'>Key Features</h2>
          <ul className='list-group list-group-flush'>
            <li className='list-group-item feature-item'>District Wise College Search</li>
            <li className='list-group-item feature-item'>Merit List for Undergraduate Programs</li>
            <li className='list-group-item feature-item'>Registration and Payment Status</li>
            <li className='list-group-item feature-item'>Payment Verification</li>
          </ul>
        </div>

        <div className='my-5 usage-section'>
          <h2 className='mb-4 section-heading'>How to Use</h2>
          <p className='usage-text'>
            Navigate through the tabs above or use the quick links below to get started:
          </p>
          <ul className='list-group list-group-flush'>
            <li className='list-group-item usage-link'><Link to='/district-wise-college'>District Wise College</Link></li>
            <li className='list-group-item usage-link'><Link to='/merit-list-ug'>Merit List UG</Link></li>
            <li className='list-group-item usage-link'><Link to='/registration-payment-status'>Registration Payment Status</Link></li>
            <li className='list-group-item usage-link'><Link to='/verify-payments'>Verify Payments</Link></li>
          </ul>
        </div>

        <div className='my-5 help-section'>
          <h2 className='mb-4 section-heading'>Need Help?</h2>
          <p className='help-text'>
            If you have any questions or encounter issues during the application process,
            please don't hesitate to <Link to='/contact'>contact us</Link>. Our support team
            is available to assist you.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
