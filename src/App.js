import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DroneDataDump from './DroneDataDump';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Define your routes */}
        <Routes>
          <Route path="/drone-data" element={<DroneDataDump />} />
          {/* You can add more routes here */}
          <Route path="*" element={<div>Page Not Found</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
