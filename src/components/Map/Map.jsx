import React, { useState, useEffect } from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '400px',
  };
  

function Map({ droneData }) {

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: 'AIzaSyA7p5mTi4z_jawGdGSc9MKjWM4JLLjqYYw',
      });
  

  return isLoaded ?  (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={{ lat: 30.6944, lng: -88.0431 }}
      zoom={10}
    >
      {/* Render markers dynamically */}
      {droneData.map((drone) => (
        <Marker
          key={drone._id}
          position={{ lat: drone.gps.latitude, lng: drone.gps.longitude }}
          title={`Confidence: ${drone.confidence}`}
        />
      ))}
    </GoogleMap>
  ) : (
    <p>Loading Map...</p>
  );
}

export default React.memo(Map);