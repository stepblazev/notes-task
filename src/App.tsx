import { Container, ThemeProvider } from '@mui/material';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { fetchNotes } from './store/notes/notesSlice';
import Header from './components/header/Header';
import { theme } from './theme';
import NoteList from './components/note-list/NoteList';
import Loader from './components/_UI/Loader';

const App: React.FC = () => {
	const dispatch = useAppDispatch();

	const { isNotesLoading } = useAppSelector((state) => state.notes);
	const { fitleredNotes } = useAppSelector((state) => state.filter);

	useEffect(() => {
		dispatch(fetchNotes());
	}, []);

	return (
		<ThemeProvider theme={theme}>
			<Header />
			<Container maxWidth='md' sx={{ padding: 1, pb: '120px' }}>
				{isNotesLoading ? <Loader /> : <NoteList notes={fitleredNotes} />}
			</Container>
		</ThemeProvider>
	);
};

export default App;
