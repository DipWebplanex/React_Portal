import React from 'react';
import PDFGenerator from './PDFGenerator';
import './UserProfile.css'; // Custom styles for Profile page
import Navbar from './Navbar';

const Profile = () => {
  const studentDetails = {
    Name: 'John Doe',
    RegistrationNumber: '123456',
    Email: 'john.doe@example.com',
    Phone: '123-456-7890',
    ProfileImage: 'https://th.bing.com/th?id=ORMS.5e6bfd591bf979ba3eaafd6d64d589dd&pid=Wdp&w=268&h=140&qlt=90&c=1&rs=1&dpr=1&p=0', // URL for the profile image
  };

  const marks = {
    Mathematics: 95,
    Physics: 90,
    Chemistry: 88,
    Biology: 92,
  };

  return (
    <div className="container mt-4">
      <Navbar />
      <h1 className="display-4 text-center mb-4 main-heading">Student Profile</h1>
      <div className="card p-4">
        <div className="profile-header">
          <img src={studentDetails.ProfileImage} alt="Profile" className="profile-image" />
          <div className="profile-info">
            <h2>Personal Information</h2>
            <ul>
              {Object.entries(studentDetails).map(([key, value]) => (
                key !== 'ProfileImage' && (
                  <li key={key}>
                    <strong>{key}:</strong> {value}
                  </li>
                )
              ))}
            </ul>
          </div>
        </div>
        <h2>Marks</h2>
        <ul>
          {Object.entries(marks).map(([key, value]) => (
            <li key={key}>
              <strong>{key}:</strong> {value}
            </li>
          ))}
        </ul>
        <div className="pdf-download">
          <PDFGenerator studentDetails={studentDetails} marks={marks} />
        </div>
      </div>
    </div>
  );
};

export default Profile;
