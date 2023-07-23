import { Fab } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const ClearButton: React.FC = () => {
	const clearHandler = () => {};

	return (
		<Fab color='error' onClick={clearHandler}>
			<DeleteOutlineIcon />
		</Fab>
	);
};

export default ClearButton;
