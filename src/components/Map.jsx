import React, {
  createElement,
  useCallback,
  useEffect,
  useMemo,
  useRef,
} from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { useDispatch, useSelector } from 'react-redux';
import { moveCenter } from '../slices/googleSlice';
const { GOOGLE_API_KEY } = require('../../server/envVars');

async function getCenter() {
  const res = await fetch('http://localhost:3000/google/');
  const data = await res.json();
  return data;
}

async function filterRestaurants() {
  return null;
}

export default function Map() {
  const dispatch = useDispatch();

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: GOOGLE_API_KEY,
    // do we need any other options here, such as additional libraries?
  });

  useEffect(async () => {
    const center = await getCenter();
    mapRef.current?.panTo(center);
    dispatch(moveCenter(center));
  }, []);

  const center = useSelector((state) => state.google.center);

  const defaultZoom = 14;
  const mapRef = useRef();
  const defaultCenter = useMemo(() => center, []);
  const options = useMemo(
    () => ({
      // what else might we need here?
      clickableIcons: false,
      mapId: 'dd51250f4e314a82',
    }),
    []
  );
  const onLoad = useCallback((map) => {
    return (mapRef.current = map);
  }, []);
  // const restaurants = useMemo(() => filterRestaurants, [state.google.center]);

  return isLoaded ? (
    <div id='map'>
      <GoogleMap
        zoom={defaultZoom}
        center={defaultCenter}
        options={options}
        onLoad={onLoad}
        mapContainerClassName='map_container'
      >
        {/* {restaurants &&
          restaurants.map((rest) => (
            <Marker
              key={rest.id}
              position={rest.pos}
            />
          ))} */}
      </GoogleMap>
    </div>
  ) : (
    <>Map Loading...</>
  );
}
