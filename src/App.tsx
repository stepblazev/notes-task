import {
	Container,
	Typography,
	Stack,
	Card,
	CardContent,
	ThemeProvider,
	CircularProgress,
	Box,
} from '@mui/material';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { fetchNotes } from './store/notes/notesSlice';
import Header from './components/header/Header';
import { theme } from './theme';

const App: React.FC = () => {
	const dispatch = useAppDispatch();
	const { notes, isNotesLoading } = useAppSelector((state) => state.notes);

	useEffect(() => {
		dispatch(fetchNotes());
	}, []);

	return (
		<ThemeProvider theme={theme}>
			<Header />
			<Container sx={{ padding: 1, pb: '100px' }}>
				{isNotesLoading ? (
					<Box sx={{ display: 'flex', justifyContent: 'center' }}>
						<CircularProgress size={70} />
					</Box>
				) : (
					<Stack spacing={2}>
						{notes.map((note, index) => (
							<Card variant='outlined' key={note.id}>
								<CardContent>
									<Typography variant='h6' component='h3'>
										{note.id}. {note.topic}
									</Typography>
									<Typography variant='body1' component='p'>
										{note.body}
									</Typography>
									<Typography variant='body2' component='p'>
										{note.tags.join(' | ')}
									</Typography>
								</CardContent>
							</Card>
						))}
					</Stack>
				)}
			</Container>
		</ThemeProvider>
	);
};

export default App;
