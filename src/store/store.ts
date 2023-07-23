import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { notesSlice } from './notes/notesSlice';

const rootReducer = combineReducers({
	notes: notesSlice.reducer,
});

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer,
	});
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
