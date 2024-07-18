// ContactUsPage.js
import React from 'react';
import Navbar from './Navbar';
//import './ContactUsPage.css'; // Custom CSS for Contact Us page

function ContactUsPage() {
  return (
    <div className='container'>
      <Navbar />
      <div className='mt-4'>
        <h1>Contact Us</h1>
        <p>
          If you have any questions or need assistance, please feel free to contact us.
        </p>
        <p>
          Email: info@admissionportal.com<br />
          Phone: +1234567890<br />
          Address: 123 Example Street, City, Country
        </p>
      </div>
    </div>
  );
}

export default ContactUsPage;
