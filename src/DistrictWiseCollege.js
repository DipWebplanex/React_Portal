import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Navbar from './Navbar'; // Assuming you have a Navbar component
import './DistrictWiseCollege.css'; // Custom styles for DistrictWiseCollege
import CollegeInfo from './CollegeInfo'; // Import CollegeInfo component

function DistrictWiseCollege() {
  const [state, setState] = useState('');
  const [district, setDistrict] = useState('');
  const [colleges, setColleges] = useState([]);

  // Define states, districts, and college data
  const states = ['Gujarat', 'Maharashtra', 'Rajasthan']; // Example states
  const districts = {
    'Gujarat': ['Ahmedabad', 'Surat'],
    'Maharashtra': ['Mumbai', 'Pune'],
    'Rajasthan': ['Jaipur', 'Udaipur'],
  }; // Example districts

  const collegesData = {
    'Ahmedabad': [
      { id: 1, name: 'Gujarat University', image: 'https://via.placeholder.com/150', seatsAvailable: 120 },
      { id: 2, name: 'Nirma University', image: 'https://via.placeholder.com/150', seatsAvailable: 100 }
    ],
    'Surat': [
      { id: 3, name: 'SVNIT', image: 'https://via.placeholder.com/150', seatsAvailable: 150 },
      { id: 4, name: 'Veer Narmad South Gujarat University', image: 'https://via.placeholder.com/150', seatsAvailable: 80 }
    ],
    'Mumbai': [
      { id: 5, name: 'University of Mumbai', image: 'https://via.placeholder.com/150', seatsAvailable: 200 },
      { id: 6, name: 'IIT Bombay', image: 'https://via.placeholder.com/150', seatsAvailable: 180 }
    ],
    'Pune': [
      { id: 7, name: 'Savitribai Phule Pune University', image: 'https://via.placeholder.com/150', seatsAvailable: 170 },
      { id: 8, name: 'Fergusson College', image: 'https://via.placeholder.com/150', seatsAvailable: 90 }
    ],
    'Jaipur': [
      { id: 9, name: 'University of Rajasthan', image: 'https://via.placeholder.com/150', seatsAvailable: 140 },
      { id: 10, name: 'Malaviya National Institute of Technology', image: 'https://via.placeholder.com/150', seatsAvailable: 160 }
    ],
    'Udaipur': [
      { id: 11, name: 'Mohanlal Sukhadia University', image: 'https://via.placeholder.com/150', seatsAvailable: 110 },
      { id: 12, name: 'College of Technology and Engineering', image: 'https://via.placeholder.com/150', seatsAvailable: 130 }
    ],
  };

  const handleStateChange = (event) => {
    const selectedState = event.target.value;
    setState(selectedState);
    setDistrict('');
  };

  const handleDistrictChange = (event) => {
    const selectedDistrict = event.target.value;
    setDistrict(selectedDistrict);
  };

  const fetchColleges = (selectedDistrict) => {
    const colleges = collegesData[selectedDistrict] || [];
    setColleges(colleges);
  };

  useEffect(() => {
    if (district) {
      fetchColleges(district);
    }
  }, [district]);

  return (
    <div className='container'>
      <Navbar />
      <div className='mt-4'>
        <h1 className='display-4 text-center mb-4 main-heading'>District Wise College</h1>

        <div className='form-section'>
          <div className='form-group'>
            <label htmlFor="stateSelect">Select State:</label>
            <select id="stateSelect" className='form-control custom-select' value={state} onChange={handleStateChange}>
              <option value="">Select State</option>
              {states.map((state) => (
                <option key={state} value={state}>{state}</option>
              ))}
            </select>
          </div>

          <div className='form-group'>
            <label htmlFor="districtSelect">Select District:</label>
            <select id="districtSelect" className='form-control custom-select' value={district} onChange={handleDistrictChange} disabled={!state}>
              <option value="">Select District</option>
              {state && districts[state]?.map((district) => (
                <option key={district} value={district}>{district}</option>
              ))}
            </select>
          </div>
        </div>

        <h2 className='text-center'>Colleges:</h2>
        <div className='row'>
          {colleges.length > 0 ? (
            colleges.map((college) => (
              <div key={college.id} className='col-md-4 mb-3'>
                <div className='card college-card'>
                  <img src={college.image} className='card-img-top' alt={college.name} />
                  <div className='card-body'>
                    <h5 className='card-title'>{college.name}</h5>
                    <p className='card-text'>Seats Available: {college.seatsAvailable}</p>
                    <Link to={`/college/${college.id}`} className='btn btn-primary'>View Details</Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className='col-12'>
              <p className='text-center'>No colleges found</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default DistrictWiseCollege;
