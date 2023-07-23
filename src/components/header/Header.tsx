import { AppBar, styled, Container } from '@mui/material';
import StyledToolbar from './Toolbar';

const StyledAppBar = styled(AppBar)({
	backgroundColor: 'white',
	bottom: 0,
	top: 'auto',
	boxShadow: '0px 0px 6px -2px rgba(0, 0, 0, 0.2)',
});

const Header: React.FC = () => {
	return (
		<StyledAppBar position='fixed'>
			<Container sx={{ position: 'relative' }}>
				<StyledToolbar />
			</Container>
		</StyledAppBar>
	);
};

export default Header;
