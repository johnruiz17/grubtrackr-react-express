import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getNext = createAsyncThunk(
  'restaurants/getNext',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const offset = state.restaurants.perPage + state.restaurants.offset;
    const url = `http://localhost:3000/next/offset/${state.restaurants.location}/${offset}`;
    console.log(url);
    const res = await fetch(url);
    const restaurants = await res.json();
    return restaurants.businesses;
  }
);

const initialState = {
  restList: [],
  offset: 0,
  perPage: 50,
  status: 'idle',
  location: '',
  categories: [],
};

export const restaurantsSlice = createSlice({
  name: 'restaurants',
  initialState,
  reducers: {
    updateRest: (state, action) => {
      // action payload should be an array [query attricute, value]
      state.restList = action.payload;
    },
    setLocation: (state, action) => {
      state.location = action.payload;
    },
    resetOffset: (state, action) => {
      state.offset = 0;
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
  },
  extraReducers: {
    [getNext.pending]: (state, action) => {
      state.status = 'loading';
    },
    [getNext.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.offset += state.perPage;
      state.restList.push(...action.payload);
    },
    [getNext.rejected]: (state, action) => {
      state.status = 'failed';
    },
  },
});

export const { updateRest, setLocation, resetOffset, setStatus } =
  restaurantsSlice.actions;
export default restaurantsSlice.reducer;
