import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	reviews: {}
};

export const reviewSlice = createSlice({
	name: 'review',
	initialState,
	reducers: {
		updateReview: (state, action) => {
			state.reviews = action.payload;
		}
	}
});

export const { updateReview } = reviewSlice.actions;
export default reviewSlice.reducer;
