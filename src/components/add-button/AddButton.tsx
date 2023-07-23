import { Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { INote } from '../../models/models';
import { useAppDispatch } from '../../hooks/redux';
import { addNote } from '../../store/notes/notesSlice';

const AddButton: React.FC = () => {
	const dispatch = useAppDispatch();

	const addHandler = () => {
		const note: INote = {
			id: Date.now(),
			topic: 'Testing topic',
			body: 'Somebody once told the world is gonna roll me',
			tags: ['shrek', 'song', 'test'],
		};
		dispatch(addNote(note));
	};

	return (
		<Fab color='primary' onClick={addHandler}>
			<AddIcon />
		</Fab>
	);
};

export default AddButton;