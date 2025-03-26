import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage/Homepage.jsx'
import AboutUs from './components/AboutUs/AboutUs.jsx';
import Map from './components/Map/Map.jsx';
import { io } from 'socket.io-client';

const socket = io('http://68.183.159.42:8080');

const App = () => {
  const [droneData, setDroneData] = useState([]); // Centralized drone data states

  useEffect(() => {
    // Real-time updates
    fetch('http://68.183.159.42:8080/api/drone-data')
    .then((res) => res.json())
    .then((data) => setDroneData(data))
    .catch((error) => console.error('Error fetching initial drone data:', error));

    socket.on('new-drone-data', (data) => {
      console.log('New drone data received:', data);
      setDroneData((prev) => {
        const updatedData = [...prev, data];
        console.log('Updated droneData state:', updatedData);
        return updatedData;
      });
    });
  
    socket.on('delete-drone-data', ({ id }) => {
      console.log('Drone data deleted with ID:', id);
      setDroneData((prev) => prev.filter((drone) => drone._id !== id));
    });
  
    return () => {
      socket.off('new-drone-data');
      socket.off('delete-drone-data');
      socket.disconnect();
    };
  }, []);

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<AboutUs />} />
          {/* Pass droneData as a prop to MapTest */}
          <Route path="/map" element={<Map droneData={droneData} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
