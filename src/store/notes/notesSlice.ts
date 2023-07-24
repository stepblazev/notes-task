import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { INote } from '../../models/models';
import { AppDispatch } from '../store';
import Database from '../../database/database';

interface INotesState {
	notes: INote[];
	isNotesLoading: boolean;
	notesError: string | null;
}

const initialState: INotesState = {
	notes: [],
	isNotesLoading: false,
	notesError: null,
};

export const notesSlice = createSlice({
	name: 'NOTES',
	initialState,
	reducers: {
		fetchNotes(state) {
			state.isNotesLoading = true;
			state.notesError = null;
		},
		fetchNotesSuccess(state, action: PayloadAction<INote[]>) {
			state.isNotesLoading = false;
			state.notes = action.payload;
		},
		fetchNotesError(state, action: PayloadAction<string>) {
			state.isNotesLoading = false;
			state.notesError = action.payload;
		},
	},
});

export const fetchNotes = () => async (dispatch: AppDispatch) => {
	try {
		dispatch(notesSlice.actions.fetchNotes());
		const response = await Database.getAll();
		response.reverse();
		dispatch(notesSlice.actions.fetchNotesSuccess(response));
	} catch (error) {
		const { message } = error as Error;
		dispatch(notesSlice.actions.fetchNotesError(message));
	}
};

export const addNote = (note: INote) => async (dispatch: AppDispatch) => {
	try {
		dispatch(notesSlice.actions.fetchNotes());
		await Database.create(note);
		dispatch(fetchNotes());
	} catch (error) {
		const { message } = error as Error;
		dispatch(notesSlice.actions.fetchNotesError(message));
	}
};

export const clearNotes = () => async (dispatch: AppDispatch) => {
	try {
		dispatch(notesSlice.actions.fetchNotes());
		await Database.clear();
		dispatch(notesSlice.actions.fetchNotesSuccess([]));
	} catch (error) {
		const { message } = error as Error;
		dispatch(notesSlice.actions.fetchNotesError(message));
	}
};
