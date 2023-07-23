import { TextField } from '@mui/material';

const SearchInput: React.FC = () => {
	return (
		<TextField
			variant='outlined'
			label='Теги для поиска'
			size='small'
			fullWidth
			sx={{ marginLeft: '10px' }}
		/>
	);
};

export default SearchInput;
