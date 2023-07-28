import {
	Button,
	CardActions,
	CardContent,
	Chip,
	Paper,
	Stack,
	TextField,
	TextareaAutosize,
	Typography,
	styled,
} from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import { useState, useEffect, ChangeEvent } from 'react';
import { INote } from '../../models/models';
import { useAppDispatch } from '../../hooks/redux';
import { updateNote } from '../../store/notes/notesSlice';
import { NOTE_BODY_LENGTH } from '../../../config';

interface IEditFormProps {
	note: INote;
	closeModal: () => any;
}

const StyledPaper = styled(Paper)(({ theme }) => ({
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	[theme.breakpoints.down('sm')]: {
		width: 'calc(100% - 20px)',
	},
}));

const StyledTextArea = styled(TextareaAutosize)(({ theme }) => ({
	display: 'block',
	padding: '10px',
	minWidth: '400px',
	minHeight: '200px',
	border: '2px solid',
	resize: 'none',
	borderRadius: '5px',
	borderColor: theme.palette.primary['main'],
	outline: 'none',
	[theme.breakpoints.down('sm')]: {
		width: 'calc(100% - 20px)',
		minWidth: 'auto',
	},
}));

const EditForm: React.FC<IEditFormProps> = ({ note, closeModal }) => {
	const dispatch = useAppDispatch();

	const [showSave, setShowSave] = useState<boolean>(false);
	const [localNote, setLocalNote] = useState<INote>({ ...note });

	useEffect(() => {
		const changesExist =
			localNote.topic !== note.topic ||
			localNote.body !== note.body ||
			JSON.stringify(localNote.tags) !== JSON.stringify(note.tags);
		setShowSave(changesExist);
	}, [localNote]);

	const changeTopicHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setLocalNote((prev) => ({ ...prev, topic: e.target.value }));
	};
	const deleteTag = (tag: string) => {
		setLocalNote((prev) => ({ ...prev, tags: prev.tags.filter((t) => t !== tag) }));
	};
	const changeBodyHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
		setLocalNote((prev) => ({ ...prev, body: e.target.value }));
	};
	const saveHandler = () => {
		dispatch(updateNote(localNote));
		closeModal();
	};

	return (
		<StyledPaper variant='elevation' elevation={10}>
			<CardContent>
				<Typography variant='h5' gutterBottom>
					Редактирование заметки
				</Typography>
				<TextField
					fullWidth
					label='Тема заметки'
					variant='standard'
					value={localNote.topic}
					onChange={changeTopicHandler}
					sx={{ mb: '10px' }}
				/>
				<Stack direction='row' gap='10px' sx={{ mb: '10px', flexWrap: 'wrap' }}>
					{localNote.tags.map((tag) => (
						<Chip
							key={tag}
							label={tag}
							onDelete={() => deleteTag(tag)}
							color='primary'
						/>
					))}
				</Stack>
				<StyledTextArea
					value={localNote.body}
					maxLength={NOTE_BODY_LENGTH}
					onChange={changeBodyHandler}
					placeholder={`Максимальная длина текста ${NOTE_BODY_LENGTH} символов`}
				/>
			</CardContent>
			<CardActions sx={{ justifyContent: 'end' }}>
				{showSave && (
					<Button color='success' startIcon={<SaveIcon />} onClick={saveHandler}>
						Сохранить
					</Button>
				)}
				<Button onClick={closeModal}>Закрыть</Button>
			</CardActions>
		</StyledPaper>
	);
};

export default EditForm;
