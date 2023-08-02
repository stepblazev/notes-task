import { ConfirmOptions } from 'material-ui-confirm';
import { INote } from '../models/models';

export const tagTemplate: RegExp = /#[\wа-яА-Я]{1,15}/g;

export const startNoteTemplate: Omit<INote, 'id'> = {
	topic: 'Подсказка',
	body: 'Здесь #вы #можете #добавлять #теги используя символ "#". Изменяйте эту заметку по своему усмотрению.',
	tags: ['вы', 'можете', 'добавлять', 'теги'],
};

export const deleteConfirmTemplate = (description: string): ConfirmOptions => {
	return {
		description,
		title: 'Подтверждение действия',
		confirmationText: 'Удалить',
		cancellationText: 'Отменить',
		buttonOrder: ['confirm', 'cancel'],
		confirmationButtonProps: {
			color: 'error',
		},
	};
};
