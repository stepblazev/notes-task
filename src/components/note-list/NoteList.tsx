import { Grow, Grid } from '@mui/material';
import { INote } from '../../models/models';
import NoteItem from '../note-item/NoteItem';

interface INoteListProps {
	notes: INote[];
}

const NoteList: React.FC<INoteListProps> = ({ notes }) => {
	return (
		<Grid spacing={2} container>
			{notes.map((note) => (
				<Grow in={true} key={note.id}>
					<Grid item sm={6} xs={12}>
						<NoteItem note={note} />
					</Grid>
				</Grow>
			))}
		</Grid>
	);
};

export default NoteList;
