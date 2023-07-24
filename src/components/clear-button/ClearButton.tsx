import { Fab } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useAppDispatch } from '../../hooks/redux';
import { clearNotes } from '../../store/notes/notesSlice';

const ClearButton: React.FC = () => {
	const dispatch = useAppDispatch();

	const clearHandler = () => {
		dispatch(clearNotes());
	};

	return (
		<Fab color='error' onClick={clearHandler}>
			<DeleteOutlineIcon />
		</Fab>
	);
};

export default ClearButton;
