import { AppBar, styled, Container } from '@mui/material';
import StyledToolbar from './Toolbar';

const StyledAppBar = styled(AppBar)({
	position: 'static',
	backgroundColor: 'white',
	boxShadow: '0px 0px 6px -2px rgba(0, 0, 0, 0.2)',
});

const Header: React.FC = () => {
	return (
		<StyledAppBar>
			<Container>
				<StyledToolbar />
			</Container>
		</StyledAppBar>
	);
};

export default Header;
