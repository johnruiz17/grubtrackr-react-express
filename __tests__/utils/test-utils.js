// This is a wrapper function to provide a store with some functionality for testing
// This was modified from the documentation found at: https://redux.js.org/usage/writing-tests
import React from 'react';
import { configureStore } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';

import querySlice from '../../src/slices/querySlice';
import restaurantsSlice from '../../src/slices/restaurantsSlice';
import reviewSlice from '../../src/slices/reviewSlice';
import googleSlice from '../../src/slices/googleSlice';

export function renderWithProviders(
  ui,
  {
    preloadedState = {},
    store = configureStore({
      reducer: {
        restaurants: restaurantsSlice,
        query: querySlice,
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
