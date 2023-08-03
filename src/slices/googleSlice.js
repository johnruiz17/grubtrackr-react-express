import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  center: { lat: 0, lng: 0 },
  loading: 'idle',
  mapRef: {},
};

const googleSlice = createSlice({
  name: 'google',
  initialState,
  reducers: {
    moveCenter: (state, action) => {
      state.center = action.payload;
      if (Object.hasOwn(state.mapRef, 'center')) {
        state.mapRef.center?.panTo(action.payload);
      }
    },
    setMapRef: (state, action) => {
      state.mapRef = action.payload;
    },
  },
});

export const { moveCenter, updateRestaurants, setMapRef } = googleSlice.actions;
export default googleSlice.reducer;
