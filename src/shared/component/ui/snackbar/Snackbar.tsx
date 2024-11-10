import { FC, PropsWithChildren } from 'react';
import { useSubscription } from '@cobuildlab/react-simple-state';
import { AlertColor } from '@mui/material';
import { SnackbarProvider as NotistackProvider, useSnackbar } from 'notistack';
import { snackbarEvent } from './snackbar-events';
import { SnackbarAlert } from './components/SnackbarAlert';

export const snackbar: Record<AlertColor, (message: string) => void> = {
  error: (message) =>
    snackbarEvent.dispatch({
      type: 'error',
      message,
    }),
  success: (message) =>
    snackbarEvent.dispatch({
      type: 'success',
      message,
    }),
  warning: (message) =>
    snackbarEvent.dispatch({
      type: 'warning',
      message,
    }),
  info: (message) =>
    snackbarEvent.dispatch({
      type: 'info',
      message,
    }),
};

const SnackbarHandel = (): JSX.Element => {
  const { enqueueSnackbar } = useSnackbar();

  useSubscription(snackbarEvent, (data) => {
    if (!data) return;

    enqueueSnackbar('', {
      content: <SnackbarAlert data={data} />,
      variant: data.type,
      SnackbarProps: { style: { paddingTop: '70px' } },
    });
  });

  return <></>;
};

export const SnackbarProvider: FC<PropsWithChildren> = ({ children }) => (
  <NotistackProvider maxSnack={3}>
    <SnackbarHandel />
    {children}
  </NotistackProvider>
);
