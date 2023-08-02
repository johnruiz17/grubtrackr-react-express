import { configureStore } from '@reduxjs/toolkit';
import queryReducer from '../slices/querySlice';
import restaurantsReducer from '../slices/restaurantsSlice';
import reviewSlice from '../slices/reviewSlice';
import googleSlice from '../slices/googleSlice';
//  restaurants: restaurantsReducer,
export const store = configureStore({
  reducer: {
    restaurants: restaurantsReducer,
    query: queryReducer,
    review: reviewSlice,
    google: googleSlice,
  },
});

export default store;
