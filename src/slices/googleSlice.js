import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  center: { lat: 0, lng: 0 },
  loading: 'idle',
};

const googleSlice = createSlice({
  name: 'google',
  initialState,
  reducers: {
    moveCenter: (state, action) => {
      state.center = action.payload;
    },
  },
});

export const { moveCenter, updateRestaurants } = googleSlice.actions;
export default googleSlice.reducer;
