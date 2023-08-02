import React from 'react';
import { configureStore } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';

import queryReducer from '../../slices/querySlice';
import restaurantsReducer from '../../slices/restaurantsSlice';
import reviewSlice from '../../slices/reviewSlice';
import googleSlice from '../../slices/googleSlice';

export function renderWithProviders(
  ui,
  {
    preloadedState = {},
    store = configureStore({
      reducer: {
        restaurants: restaurantsReducer,
        query: queryReducer,
        review: reviewSlice,
        google: googleSlice,
      },
      preloadedState,
    }),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
