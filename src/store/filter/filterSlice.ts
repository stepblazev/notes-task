import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { INote } from '../../models/models';
import { AppDispatch } from '../store';

interface IFilterState {
	tags: string[];
	avalibleTags: string[];
	fitleredNotes: INote[];
}

const initialState: IFilterState = {
	tags: [],
	avalibleTags: [],
	fitleredNotes: [],
};

export const filterSlice = createSlice({
	name: 'FILTER',
	initialState,
	reducers: {
		setTags(state, action: PayloadAction<string[]>) {
			state.tags = action.payload;
		},
		setAvalibleTags(state, action: PayloadAction<INote[]>) {
			const filteredTags = action.payload
				.map((note) => note.tags)
				.flat()
				.filter(
					(tag, index, array) => index === array.indexOf(tag) && !state.tags.includes(tag)
				);
			state.avalibleTags = filteredTags;
		},
		removeTag(state, action: PayloadAction<string>) {
			state.tags = state.tags.filter((tag) => tag !== action.payload);
		},
		clearTags(state) {
			state.tags = [];
		},
		setFilteredNotes(state, action: PayloadAction<INote[]>) {
			const notes = action.payload;
			if (state.tags.length === 0) {
				state.fitleredNotes = notes;
				return;
			}
			const filteredNotes = notes.filter((note) =>
				note.tags.some((tag) => state.tags.includes(tag))
			);
			state.fitleredNotes = filteredNotes;
		},
	},
});
