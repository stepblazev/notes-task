import { Card, CardContent, Typography } from '@mui/material';
import { INote } from '../../models/models';

interface INoteItemProps {
	note: INote;
}

const NoteItem: React.FC<INoteItemProps> = ({ note }) => {
	return (
		<Card variant='outlined'>
			<CardContent>
				<Typography variant='h6' component='h3'>
					{note.id}. {note.topic}
				</Typography>
				<Typography variant='body1' component='p'>
					{note.body}
				</Typography>
				<Typography variant='body2' component='p'>
					{note.tags.join(' ')}
				</Typography>
			</CardContent>
		</Card>
	);
};

export default NoteItem;
