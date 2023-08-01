import { Toolbar } from '@mui/material';
import Tools from '../tools/Tools';
import TagSearch from '../tag-search/TagSearch';

const StyledToolbar: React.FC = () => {
	return (
		<Toolbar disableGutters>
			<TagSearch />
			<Tools />
		</Toolbar>
	);
};

export default StyledToolbar;
