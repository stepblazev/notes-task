import { FC } from 'react';
import { Toolbar, styled, Stack } from '@mui/material';
import SearchInput from '../search-input/SearchInput';
import AddButton from '../add-button/AddButton';
import ClearButton from '../clear-button/ClearButton';

const StyledBar = styled(Toolbar)((props) => ({
	width: '100%',
	backgroundColor: 'white',
	position: 'absolute',
	bottom: 'calc(100% + 20px)',
	left: '50%',
	transform: 'translateX(-50%)',
	borderRadius: '7px',
	boxShadow: '0px 0px 6px -2px rgba(0, 0, 0, 0.2)',
	[props.theme.breakpoints.down('lg')]: {
		width: 'calc(100% - 68px)',
		bottom: 'calc(100% + 10px)',
	},
}));

const StyledControls = styled(Stack)({
	position: 'absolute',
	right: 0,
	bottom: 'calc(100% + 20px)',
});

const StyledToolbar: FC = () => {
	return (
		<StyledBar>
			<StyledControls direction='column' spacing={1}>
				<AddButton />
				<ClearButton />
			</StyledControls>
			<SearchInput />
		</StyledBar>
	);
};

export default StyledToolbar;
