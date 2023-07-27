import { Toolbar } from '@mui/material';
import Search from '../search/Search';
import Tools from '../tools/Tools';

const StyledToolbar: React.FC = () => {
	return (
		<Toolbar disableGutters>
			<Search />
			<Tools />
		</Toolbar>
	);
};

export default StyledToolbar;
