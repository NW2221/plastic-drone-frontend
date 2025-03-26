import React from 'react';
import { Link } from 'react-router-dom';
import './Homepage.css'

const Homepage = () => {
  return (
    <div className='container'>
      <h1>Welcome to the Drone Tracking App</h1>
      <div className='buttonContainer'>
        {/* Button to navigate to About Us page */}
        <Link to="/about">
          <button style={{ margin: '10px', padding: '10px 20px' }}>About Us</button>
        </Link>

        {/* Button to navigate to Map page */}
        <Link to="/map">
          <button className='test'> Map</button>
        </Link>

        {/* Button to visit GitHub */}
        <a
          href="https://github.com/your-repo-url"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>GitHub</button>
        </a>
      </div>
    </div>
  );
};

export default Homepage;
