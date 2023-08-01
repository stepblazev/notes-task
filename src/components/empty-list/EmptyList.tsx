import { Stack, Typography, Button } from '@mui/material';
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import { useAppDispatch } from '../../hooks/redux';
import { addNote } from '../../store/notes/notesSlice';
import { startNoteTemplate } from '../../utils/templates';

const EmptyList: React.FC = () => {
	const dispatch = useAppDispatch();

	const addHandler = () => {
		dispatch(addNote({ id: Date.now(), ...startNoteTemplate }));
	};

	return (
		<Stack alignItems='center' flexWrap='wrap' marginTop='50px' spacing={1}>
			<Typography fontWeight={700} textTransform='uppercase' color='gray' fontSize='14px'>
				Заметок не найдено, но вы можете
			</Typography>
			<Button color='info' startIcon={<AddToPhotosIcon />} onClick={addHandler}>
				добавить новую заметку.
			</Button>
		</Stack>
	);
};

export default EmptyList;
