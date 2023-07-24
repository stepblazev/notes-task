import { MouseEvent } from 'react';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { MenuItem, Stack, Chip } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { filterSlice } from '../../store/filter/filterSlice';

const SearchInput: React.FC = () => {
	const dispatch = useAppDispatch();

	const { notes } = useAppSelector((state) => state.notes);
	const { tags } = useAppSelector((state) => state.filter);

	return (
		<Select
			multiple
			fullWidth
			size='small'
			value={tags}
			onChange={(event: SelectChangeEvent<typeof tags>) => {
				const selectedTags = event.target.value;
				dispatch(filterSlice.actions.setTags([selectedTags].flat()));
			}}
			renderValue={(selected) => (
				<Stack direction='row' spacing={1}>
					{selected.map((value) => (
						<Chip
							key={value}
							label={value}
							color='primary'
							onDelete={(e: Event) => {
								dispatch(filterSlice.actions.removeTag(value));
							}}
						/>
					))}
				</Stack>
			)}
		>
			{notes
				.map((note) => note.tags)
				.flat()
				.filter(
					(value, index, array) => array.indexOf(value) === index && !tags.includes(value)
				)
				.map((name) => (
					<MenuItem key={name} value={name}>
						{name}
					</MenuItem>
				))}
		</Select>
	);
};

export default SearchInput;
