import { useState } from 'react';
import TagIcon from '@mui/icons-material/Tag';
import CloseIcon from '@mui/icons-material/Close';
import { Tooltip, IconButton, Grow, Stack, Chip, styled, Paper } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { filterSlice } from '../../store/filter/filterSlice';

const StyledTagsContainer = styled(Paper)(() => ({
	padding: '10px',
	position: 'absolute',
	left: '0',
	top: 'calc(100% + 10px)',
	backgroundColor: 'white',
	overflow: 'hidden',
}));

const TagSelector: React.FC = () => {
	const dispatch = useAppDispatch();

	const { tags, avalibleTags } = useAppSelector((state) => state.filter);
	const [showTags, setShowTags] = useState<boolean>(false);

	return (
		<>
			<Tooltip title={showTags ? 'Скрыть теги' : 'Показать теги'}>
				<IconButton
					onClick={() => {
						setShowTags((prev) => !prev);
					}}
				>
					{showTags ? <CloseIcon /> : <TagIcon />}
				</IconButton>
			</Tooltip>
			<Grow in={showTags}>
				<StyledTagsContainer elevation={5}>
					<Stack direction='row' flexWrap='wrap' gap='5px'>
						{avalibleTags.map((tag) => (
							<Grow in={true} key={tag}>
								<Chip
									label={tag}
									onClick={() => {
										// FIXME
										// if (tags.length >= 3) return;
										dispatch(filterSlice.actions.setTags([tag, ...tags]));
									}}
								/>
							</Grow>
						))}
					</Stack>
				</StyledTagsContainer>
			</Grow>
		</>
	);
};

export default TagSelector;
