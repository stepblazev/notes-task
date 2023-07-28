import { ConfirmOptions } from 'material-ui-confirm';

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
