import { IconButton, Menu, MenuItem, ListItemIcon, ListItemText, Modal } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useState, useRef } from 'react';
import { INote } from '../../models/models';
import { useAppDispatch } from '../../hooks/redux';
import { deleteNote } from '../../store/notes/notesSlice';
import { useConfirm } from 'material-ui-confirm';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import EditForm from '../edit-form/EditForm';

interface INoteItemMenuProps {
	note: INote;
}

const NoteItemMenu: React.FC<INoteItemMenuProps> = ({ note }) => {
	const confirm = useConfirm();
	const dispatch = useAppDispatch();

	const menuButton = useRef<HTMLButtonElement>(null);
	const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);
	const [isEditOpened, setIsEditOpened] = useState<boolean>(false);

	const editHandler = () => {
		setIsEditOpened(true);
	};

	const deleteHandler = () => {
		confirm({
			title: 'Подтверждение действия',
			description: `Удалить запись с темой "${note.topic}"?`,
			confirmationText: 'Удалить',
			cancellationText: 'Отменить',
			buttonOrder: ['confirm', 'cancel'],
			confirmationButtonProps: {
				color: 'error',
			},
		})
			.then(() => {
				dispatch(deleteNote(note.id));
			})
			.catch(() => {
				console.log('CANCELED');
			});
	};

	return (
		<>
			<IconButton
				ref={menuButton}
				sx={{ position: 'absolute', top: 10, right: 10 }}
				onClick={() => setIsMenuOpened(true)}
			>
				<MoreVertIcon />
			</IconButton>
			<Menu
				anchorEl={menuButton.current}
				open={isMenuOpened}
				onClose={() => setIsMenuOpened(false)}
			>
				<MenuItem onClick={editHandler}>
					<ListItemIcon>
						<EditIcon fontSize='small' />
					</ListItemIcon>
					<ListItemText>Изменить</ListItemText>
				</MenuItem>
				<MenuItem onClick={deleteHandler}>
					<ListItemIcon>
						<DeleteIcon fontSize='small' />
					</ListItemIcon>
					<ListItemText>Удалить</ListItemText>
				</MenuItem>
			</Menu>
			<Modal open={isEditOpened} onClose={() => setIsEditOpened(false)}>
				<EditForm note={note} />
			</Modal>
		</>
	);
};

export default NoteItemMenu;
