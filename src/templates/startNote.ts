import { INote } from '../models/models';

export const startNoteTemplate: INote = {
	id: Date.now(),
	topic: 'Подсказка',
	body: 'Здесь #вы #можете #добавлять #теги используя символ "#". Изменяйте эту заметку по своему усмотрению.',
	tags: ['вы', 'можете', 'добавлять', 'теги'],
};
