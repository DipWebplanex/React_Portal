import React from 'react';
import Navbar from './Navbar'; // Assuming you have a Navbar component
import './MeritListPage.css'; // Custom styles for Merit List Page

function MeritListPage() {
  return (
    <div className='container merit-list-container'>
      <Navbar />
      <div className='mt-4'>
        <h1 className='text-center'>Merit List for Undergraduate Programs</h1>
        <div className='row mt-5'>
          <div className='col-md-6'>
            <div className='category-card'>
              <h2 className='category-title'>Category A</h2>
              <ul className='list-group list-group-flush'>
                <li className='list-group-item'>Student A - Score: 95%</li>
                <li className='list-group-item'>Student B - Score: 94%</li>
                <li className='list-group-item'>Student C - Score: 93%</li>
                {/* Add more list items as needed */}
              </ul>
            </div>
          </div>
          <div className='col-md-6'>
            <div className='category-card'>
              <h2 className='category-title'>Category B</h2>
              <ul className='list-group list-group-flush'>
                <li className='list-group-item'>Student D - Score: 92%</li>
                <li className='list-group-item'>Student E - Score: 91%</li>
                <li className='list-group-item'>Student F - Score: 90%</li>
                {/* Add more list items as needed */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MeritListPage;
