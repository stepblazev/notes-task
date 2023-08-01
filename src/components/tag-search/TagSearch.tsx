import { useEffect } from 'react';
import FilterAltOffIcon from '@mui/icons-material/FilterAltOff';
import { Stack, Chip, Grow, Typography, Tooltip, IconButton } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { filterSlice } from '../../store/filter/filterSlice';
import TagSelector from './TagSelector';

const TagSearch: React.FC = () => {
	const dispatch = useAppDispatch();

	const { notes } = useAppSelector((state) => state.notes);
	const { tags, avalibleTags } = useAppSelector((state) => state.filter);

	useEffect(() => {
		dispatch(filterSlice.actions.setAvalibleTags(notes));
		dispatch(filterSlice.actions.setFilteredNotes(notes));
	}, [tags, notes]);

	return (
		<Stack direction='row' alignItems='center' gap='10px' flexWrap='wrap' padding='10px 0'>
			{avalibleTags.length > 0 ? (
				<TagSelector />
			) : (
				<Tooltip title='Очистить фильтр'>
					<IconButton onClick={() => dispatch(filterSlice.actions.setTags([]))}>
						<FilterAltOffIcon />
					</IconButton>
				</Tooltip>
			)}
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

export default TagSearch;
