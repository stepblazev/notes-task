import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { INote } from '../../models/models';
import { AppDispatch } from '../store';

interface IFilterState {
	tags: string[];
	fitleredNotes: INote[];
}

const initialState: IFilterState = {
	tags: [],
	fitleredNotes: [],
};

export const filterSlice = createSlice({
	name: 'FILTER',
	initialState,
	reducers: {
		setTags(state, action: PayloadAction<string[]>) {
			state.tags = action.payload;
		},
		removeTag(state, action: PayloadAction<string>) {
			state.tags = state.tags.filter((tag) => tag !== action.payload);
		},
		clearTags(state) {
			state.tags = [];
		},
	},
});
