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
import {
	extractTagsFromLine,
	getUniqueArrayValues,
	removeTagFromLine,
} from '../../utils/functions';

const StyledPaper = styled(Paper)(({ theme }) => ({
	width: '500px',
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
	width: 'calc(100% - 20px)',
	minHeight: '200px',
	border: '1.5px solid',
	resize: 'none',
	borderRadius: '5px',
	borderColor: theme.palette.primary['main'],
	fontSize: '16px',
	outline: 'none',
}));

interface IEditFormProps {
	note: INote;
	closeModal: () => any;
}

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
		const body: string = removeTagFromLine(localNote.body, tag);
		setLocalNote((prev) => ({ ...prev, body, tags: prev.tags.filter((t) => t !== tag) }));
	};

	const changeBodyHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
		const body: string = e.target.value;
		let tags: string[] = extractTagsFromLine(body) ?? [];
		tags = getUniqueArrayValues<string>(tags);
		setLocalNote((prev) => ({ ...prev, body, tags }));
	};

	const saveHandler = () => {
		dispatch(updateNote(localNote));
		closeModal();
	};

	return (
		<StyledPaper variant='elevation' elevation={10}>
			<CardContent>
				<Typography variant='h5' sx={{ mb: '20px' }}>
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
				<Stack direction='row' gap='10px' flexWrap='wrap' sx={{ mb: '10px' }}>
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
					<Button color='info' startIcon={<SaveIcon />} onClick={saveHandler}>
						Сохранить
					</Button>
				)}
				<Button onClick={closeModal}>Закрыть</Button>
			</CardActions>
		</StyledPaper>
	);
};

export default EditForm;
