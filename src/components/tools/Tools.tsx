import { SpeedDialAction, SpeedDial, Container } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import AddIcon from '@mui/icons-material/Add';
import { INote } from '../../models/models';
import { useAppDispatch } from '../../hooks/redux';
import { addNote, clearNotes } from '../../store/notes/notesSlice';

const Tools: React.FC = () => {
	const dispatch = useAppDispatch();

	const addHandler = () => {
		const note: INote = {
			id: Date.now(),
			topic: 'Testing topic 3',
			body: 'I need to go to the shop today',
			tags: ['shop', 'store', 'money'],
		};
		dispatch(addNote(note));
	};

	const clearHandler = () => {
		if (!confirm('Удалить все записи?')) return;
		dispatch(clearNotes());
	};

	return (
		<Container
			sx={{ position: 'fixed', bottom: 0, left: '50%', transform: 'translateX(-50%)' }}
		>
			<SpeedDial
				ariaLabel='Tools'
				sx={{ position: 'absolute', bottom: 16, right: 16 }}
				icon={<SpeedDialIcon />}
			>
				<SpeedDialAction
					icon={<DeleteOutlineIcon />}
					tooltipTitle='Удалить все'
					onClick={clearHandler}
				/>
				<SpeedDialAction icon={<AddIcon />} tooltipTitle='Добавить' onClick={addHandler} />
			</SpeedDial>
		</Container>
	);
};

export default Tools;