import { useEffect } from 'react';
import { Stack, Chip, Grow, Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { filterSlice } from '../../store/filter/filterSlice';

import TagSelector from './TagSelector';

const Search: React.FC = () => {
	const dispatch = useAppDispatch();

	const { notes } = useAppSelector((state) => state.notes);
	const { tags, avalibleTags } = useAppSelector((state) => state.filter);

	useEffect(() => {
		dispatch(filterSlice.actions.setAvalibleTags(notes));
		dispatch(filterSlice.actions.setFilteredNotes(notes));
	}, [tags, notes]);

	return (
		<Stack direction='row' alignItems='center' gap='10px' flexWrap='wrap' padding='10px 0'>
			{avalibleTags.length > 0 && <TagSelector />}
			{tags.length == 0 && (
				<Typography variant='body1' component='h6' color='rgba(0, 0, 0, 0.54)'>
					Фильтрация отключена
				</Typography>
			)}
			{tags.map((value) => (
				<Grow in={true} key={value}>
					<Chip
						label={value}
						color='primary'
						onDelete={() => {
							dispatch(filterSlice.actions.removeTag(value));
						}}
					/>
				</Grow>
			))}
		</Stack>
	);
};

export default Search;
