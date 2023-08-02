import React, { createElement, useCallback, useMemo, useState } from 'react';
import {
  useLoaderData
} from 'react-router-dom';
import { 
  GoogleMap,
  useJsApiLoader
} from '@react-google-maps/api';
const { GOOGLE_API_KEY } = require('../../server/envVars');

export async function loader() {
  // query the backend for the user's location and set it
  return null;
}

export default function Map() {
  const userData = useLoaderData();

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: GOOGLE_API_KEY,
    // do we need any other options here, such as additional libraries?
  });

  const defaultZoom = 14;
  const defaultCenter = useMemo(() => ({ lat: 37.7704, lng: -122.4197 }), []);
  const options = useMemo(() => ({
    // what else might we need here?
    clickableIcons: false
  }), []);

  return isLoaded ? (
    <div id='map'>
      <GoogleMap
        zoom={defaultZoom}
        center={defaultCenter}
        options={options}
        mapContainerClassName='map_container'
      ></GoogleMap>
    </div>
  ) : (<>Map Loading...</>);
}