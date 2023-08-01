import { Box, Input, InputAdornment, styled } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useRef } from 'react';

const StyledBox = styled(Box)(({ theme }) => ({
	padding: '7px',
	position: 'absolute',
	left: 16,
	bottom: 16,
	backgroundColor: 'rgba(255, 255, 255, 1)',
	boxShadow: '0px 4px 8px 0px rgba(0, 0, 0, 0.2)',
	borderRadius: '5px',
	[theme.breakpoints.down('md')]: {
		width: 'calc(100% - 120px)',
	},
}));

const StyledInput = styled(Input)({
	'& input': {
		transition: 'width 0.3s ease-in-out',
	},
});

const TopicSearch: React.FC = () => {
	const inputRef = useRef<HTMLInputElement>(null);

	return (
		<StyledBox>
			<StyledInput
				ref={inputRef}
				id='topic-search'
				fullWidth
				type='search'
				startAdornment={
					<InputAdornment position='start'>
						<SearchIcon />
					</InputAdornment>
				}
			/>
		</StyledBox>
	);
};

export default TopicSearch;
