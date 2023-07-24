import { Toolbar, styled, Stack, Button } from '@mui/material';
import AddButton from '../add-button/AddButton';
import ClearButton from '../clear-button/ClearButton';
import SearchInput from '../search-input/SearchInput';

const StyledControls = styled(Stack)(({ theme }) => ({
	position: 'fixed',
	left: '50%',
	bottom: '20px',
	transform: 'translateX(-50%)',
	backgroundColor: 'white',
	boxShadow: '0px 0px 6px -2px rgba(0, 0, 0, 0.2)',
	padding: '10px 20px',
	borderRadius: '10px',
	[theme.breakpoints.down('md')]: {
		width: '100%',
		borderRadius: '0',
		bottom: 0,
	},
}));

const StyledToolbar: React.FC = () => {
	return (
		<Toolbar disableGutters>
			<SearchInput />
			<Button variant='contained' size='large' sx={{ ml: '20px' }}>
				Очистить
			</Button>
			<StyledControls direction='row' justifyContent='center' spacing={2}>
				<AddButton />
				<ClearButton />
			</StyledControls>
		</Toolbar>
	);
};

export default StyledToolbar;
