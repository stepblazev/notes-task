import { Stack } from '@mui/material';
import { INote } from '../../models/models';
import NoteItem from './NoteItem';

interface INoteListProps {
	notes: INote[];
}

const NoteList: React.FC<INoteListProps> = ({ notes }) => {
	return (
		<Stack spacing={2}>
			{notes.map((note) => (
				<NoteItem key={note.id} note={note} />
			))}
		</Stack>
	);
};

export default NoteList;
