import React, {
  createElement,
  useCallback,
  useEffect,
  useMemo,
  useRef,
} from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCenter } from '../slices/googleSlice';
const { GOOGLE_API_KEY } = require('../../server/envVars');

export default function Map() {
  const dispatch = useDispatch();

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: GOOGLE_API_KEY,
    // do we need any other options here, such as additional libraries?
  });

  useEffect(async () => {
    const res = await fetch('http://localhost:3000/google/');
    const data = res.json();

    dispatch(moveCenter(data));
  }, []);

  const center = useSelector((state) => state.google.center);
  console.log(center);

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

  return isLoaded ? (
    <div id='map'>
      <GoogleMap
        zoom={defaultZoom}
        center={defaultCenter}
        options={options}
        onLoad={onLoad}
        mapContainerClassName='map_container'
      ></GoogleMap>
    </div>
  ) : (
    <>Map Loading...</>
  );
}
