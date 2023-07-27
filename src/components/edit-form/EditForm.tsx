import {
	Button,
	Card,
	CardActions,
	CardContent,
	TextField,
	TextareaAutosize,
	styled,
} from '@mui/material';
import { INote } from '../../models/models';

interface IEditFormProps {
	note: INote;
}

const StyledCard = styled(Card)(() => ({
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translateX(-50%)',
}));

const EditForm: React.FC<IEditFormProps> = ({ note }) => {
	return (
		<StyledCard variant='outlined'>
			<CardContent>
				<h3>Редактирование {note.id}</h3>
				<TextField label='Тема записи' variant='standard' value={note.topic} />
				{/* <TextareaAutosize value={note.body} /> */}
			</CardContent>
			<CardActions>
				<Button>Сохранить</Button>
				<Button>Закрыть</Button>
			</CardActions>
		</StyledCard>
	);
};

export default EditForm;
