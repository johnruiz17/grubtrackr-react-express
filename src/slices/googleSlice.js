import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  center: { lat: 0, lng: 0 },
  restaurants: [],
  loading: 'idle',
};

const googleSlice = createSlice({
  name: 'google',
  initialState,
  reducers: {
    moveCenter: (s, a) => {
      s.center = a.payload;
    },
  },
});

export const { moveCenter } = googleSlice.actions;
export default googleSlice.reducer;
