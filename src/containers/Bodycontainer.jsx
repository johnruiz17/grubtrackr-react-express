import React, { useCallback, useState } from 'react';
import '../styles/main.scss';
import Mapcontainer from '../components/Map.jsx';
import RestaurantDisplay from './RestaurantDisplay.jsx';
import { getNext } from '../slices/googleSlice';

const Restaurantmapcontainer = () => {
  const onLoad = useCallback(() => {
    window.addEventListener(
      'scroll',
      (e) => {
        const ele = e.target;
        debug(e.currentTarget.scrollTop);
      },
      false
    );
  });

  // dispatch(getNext());

  return (
    <div id='bodycontainer'>
      <RestaurantDisplay onLoad={onLoad} />
    </div>
  );
};

export default Restaurantmapcontainer;
