import {
	Button,
	Card,
	CardActions,
	CardContent,
	Collapse,
	Typography,
	Stack,
	Chip,
} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { INote } from '../../models/models';
import { useState } from 'react';
import NoteItemMenu from './NoteItemMenu';

interface INoteItemProps {
	note: INote;
}

const NoteItem: React.FC<INoteItemProps> = ({ note }) => {
	const [isOpened, setIsOpened] = useState<boolean>(true);

	return (
		<Card variant='outlined'>
			<CardContent sx={{ pb: 0, position: 'relative' }}>
				<NoteItemMenu note={note} />
				<Typography variant='h6' component='h3' gutterBottom>
					{note.topic || 'Без названия'}
				</Typography>
				<Stack direction='row' gap={1} mb={1}>
					{note.tags.map((tag) => (
						<Chip key={tag} label={tag} color='primary' size='small' />
					))}
				</Stack>
				<Collapse in={isOpened}>
					<Typography variant='body2' component='p'>
						{note.body || 'Содержание отсутствует'}
					</Typography>
				</Collapse>
			</CardContent>
			<CardActions>
				<Button
					fullWidth
					size='small'
					onClick={() => setIsOpened((prev) => !prev)}
					startIcon={isOpened ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
				>
					{isOpened ? 'Свернуть' : 'Развернуть'}
				</Button>
			</CardActions>
		</Card>
	);
};

export default NoteItem;
