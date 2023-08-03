import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	reviews: {},
	additionalData: {}
};

export const reviewSlice = createSlice({
	name: 'review',
	initialState,
	reducers: {
		updateReview: (state, action) => {
			state.reviews = action.payload;
		},
		updateAdditionalData: (state, action) => {
			state.additionalData = action.payload;
			console.log(state.additionalData, 'additional data object in state');
		}
	}
});

export const { updateReview } = reviewSlice.actions;
export const { updateAdditionalData } = reviewSlice.actions;
export default reviewSlice.reducer;
