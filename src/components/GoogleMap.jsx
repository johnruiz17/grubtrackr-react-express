import React, { createElement, useState } from 'react';
import {
  useLoaderData
} from 'react-router-dom';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
const { GOOGLE_API_KEY } = require('../../server/envVars');

export async function loader() {
  const googleLoader = new Loader({
    apiKey: GOOGLE_API_KEY
  });

  // we can get this from a set state
  // or from a saved set of information in the database
  // once we have that
  const mapOptions = {
    center: {
      lat: -34.397,
      lng: 150.644
    },
    zoom: 8
  }

  // const mapDiv = document.createElement('div', { id: 'map' });
  const mapDiv = createElement('div');
  await googleLoader.load()
  
  const { Map } = await google.maps.importLibrary('maps');
  const map = new Map(mapDiv, mapOptions);

  return map;
}



function Map() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: GOOGLE_API_KEY
  })

  const [map, setMap] = useState(null);

  const mapOptions = {
    center: {
      lat: 37.4639,
      lng: -122.2459
    },
    zoom: 10,
    style: {
      width: '800px',
      height: '800px',
    }
  };

  const onLoad = React.useCallback((map) => {
    const bounds = new window.google.maps.LatLngBounds(mapOptions.center);
    map.fitBounds(bounds);

    setMap(map);
  })

  const onUnmount = React.useCallback((map) => {
    setMap(null);
  });

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={mapOptions.style}
      center={mapOptions.center}
      zoom={1}
      onLoad={onLoad}
      onUnmount={onUnmount}
    ></GoogleMap>
  ) : (<></>);
}

export default React.memo(Map);