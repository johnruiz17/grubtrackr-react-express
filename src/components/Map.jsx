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
import { Link } from 'react-router-dom';
const { GOOGLE_API_KEY } = require('../../server/envVars');

let mapRef;

export default function Map() {
  const [activeMarker, setActiveMarker] = useState(null);
  const restaurants = useSelector((state) => state.restaurants.restList);

  const dispatch = useDispatch();

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: GOOGLE_API_KEY,
    // do we need any other options here, such as additional libraries?
  });

  const defaultZoom = 14;
  const defaultCenter = useMemo(() => stateCenter, []);
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

  mapRef = useRef();
  const onLoad = useCallback(async (map) => {
    mapRef.current = map;
  }, []);
  const stateCenter = useSelector((state) =>
    mapRef.current?.panTo(state.google.center)
  );
  console.log(restaurants);

  const renderMarker = useCallback((rest) => {
    const icon = {
      url: 'http://maps.google.com/mapfiles/kml/shapes/dining.png',
      scaledSize: new google.maps.Size(25, 25),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(0, 0),
    };
    if (rest.categories.some((cat) => /bar/i.test(cat.alias))) {
      icon.url = 'http://maps.google.com/mapfiles/kml/shapes/bars.png';
    }

    return (
      <Marker
        key={rest.id}
        position={{
          lat: rest.coordinates.latitude,
          lng: rest.coordinates.longitude,
        }}
        content={<a href={rest.url}>{rest.name}</a>}
        icon={icon}
        onClick={() => handleActiveMarker(rest.id)}
      >
        {activeMarker === rest.id ? (
          <InfoWindow
            key={'window' + rest.id}
            onCloseClick={() => setActiveMarker(null)}
          >
            <div>{rest.name}</div>
          </InfoWindow>
        ) : null}
      </Marker>
    );
  });

  return restaurants.length && isLoaded ? (
    <div id='mapiframe'>
      <GoogleMap
        zoom={14}
        center={defaultCenter}
        options={options}
        onLoad={onLoad}
        id='mapiframe'
      >
        {restaurants.map(renderMarker)}
      </GoogleMap>
    </div>
  ) : (
    <></>
  );
}
