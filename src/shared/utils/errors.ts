import { snackbar } from '@src/shared/component/ui/snackbar/Snackbar';

export const handleFormErrors = (
  formState: Record<string, unknown>,
  notShowSnackbar?: boolean,
): string => {
  const values = Object.values(formState);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const message = values.reduce((previous: string, value: any) => {
    let displayMessage = '';
    if (value && !Array.isArray(value) && value.message) {
      displayMessage = value.message;
    }

    if (!value?.message && typeof value === 'object') {
      displayMessage = handleFormErrors(value, true);
    }

    return previous.length <= 0
      ? displayMessage ?? ''
      : `${previous}, \n ${displayMessage}`;
  }, '') as unknown as string;

  if (!notShowSnackbar) {
    snackbar.error(message);
  }
  return message;
};
