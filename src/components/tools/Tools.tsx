import { SpeedDialAction, SpeedDial, Container } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import AddIcon from '@mui/icons-material/Add';
import { useAppDispatch } from '../../hooks/redux';
import { addNote, clearNotes } from '../../store/notes/notesSlice';
import { useConfirm } from 'material-ui-confirm';
import { deleteConfirmTemplate } from '../../utils/templates';
import { startNoteTemplate } from '../../utils/templates';
import TopicSearch from '../topic-search/TopicSearch';

const Tools: React.FC = () => {
	const confirm = useConfirm();
	const dispatch = useAppDispatch();

	const addHandler = () => {
		dispatch(addNote({ id: Date.now(), ...startNoteTemplate }));
	};

	const clearHandler = () => {
		confirm(deleteConfirmTemplate('Удалить все записи?'))
			.then(() => dispatch(clearNotes()))
			.catch(() => {});
	};

	return (
		<Container
			sx={{
				position: 'fixed',
				bottom: 0,
				left: '50%',
				transform: 'translateX(-50%)',
				zIndex: 20,
			}}
		>
			{/* <TopicSearch /> */}
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
