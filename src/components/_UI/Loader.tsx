import { Box, CircularProgress } from '@mui/material';

const Loader: React.FC = () => {
	return (
		<Box sx={{ display: 'flex', justifyContent: 'center' }}>
			<CircularProgress size={70} />
		</Box>
	);
};

export default Loader;
