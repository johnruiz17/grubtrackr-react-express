import React, {
  createElement,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  InfoWindow,
} from '@react-google-maps/api';
import { useDispatch, useSelector } from 'react-redux';
import { moveCenter } from '../slices/googleSlice';
const { GOOGLE_API_KEY } = require('../../server/envVars');

async function getCenter() {
  const res = await fetch('http://localhost:3000/google/');
  const center = await res.json();

  return center;
}

export default function Map() {
  const [activeMarker, setActiveMarker] = useState(null);
  const dispatch = useDispatch();

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: GOOGLE_API_KEY,
    // do we need any other options here, such as additional libraries?
  });

  const defaultZoom = 14;
  const mapRef = useRef();
  const defaultCenter = useMemo(() => center, []);
  const options = useMemo(
    () => ({
      // what else might we need here?
      mapId: 'dd51250f4e314a82',
    }),
    []
  );

  function handleActiveMarker(id) {
    if (id === activeMarker) {
      return;
    }
    setActiveMarker(id);
  }

  const onLoad = useCallback(async (map) => {
    const center = await getCenter();
    mapRef.current = map;
    mapRef.current.panTo(center);
    dispatch(moveCenter(center));
  }, []);
  // const restaurants = useMemo(() => filterRestaurants, [state.google.center]);
  const center = useSelector((state) => {
    return mapRef.current?.panTo(state.google.center);
  });

  const restaurants = useSelector((state) => state.restaurants.restList);

  return isLoaded ? (
    <div id='mapiframe'>
      <GoogleMap
        zoom={defaultZoom}
        center={defaultCenter}
        options={options}
        onLoad={onLoad}
        mapContainerClassName='map_container'
      >
        {restaurants.length > 0 && (
          <>
            {restaurants.map((rest) => {
              console.log(rest);
              return (
                <Marker
                  key={rest._id}
                  position={{
                    lat: rest.coordinates.latitude,
                    lng: rest.coordinates.longitude,
                  }}
                  title={rest.name}
                  onClick={() => handleActiveMarker(rest._id)}
                >
                  {activeMarker === rest._id ? (
                    <InfoWindow onCloseClick={() => setActiveMarker(null)}>
                      <div>{rest.name}</div>
                    </InfoWindow>
                  ) : null}
                </Marker>
              );
            })}
          </>
        )}
      </GoogleMap>
    </div>
  ) : (
    <>Map Loading...</>
  );
}
