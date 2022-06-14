import React from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

import './Location.css';

export default function Location() {
  const lat = -22.911965590648553;
  const lng = -43.2301879891614;

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyD2j8vkqVMkgi4UdGmeut6_lqlhPnW2Z9E',
  });
  return (
    <section className='location' id='location'>
      <div className='title__container'>
        <span className='title'>Location</span>
        <span className='description'>find a place nearby to stay ...</span>
      </div>
      <div className='location__map'>
        {isLoaded ? (
          <GoogleMap
            mapContainerStyle={{ width: '100%', height: '100%' }}
            center={{ lat: lat, lng: lng }}
            zoom={16}
          >
            <></>
          </GoogleMap>
        ) : (
          <></>
        )}
      </div>
    </section>
  );
}
