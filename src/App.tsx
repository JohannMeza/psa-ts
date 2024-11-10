import { ThemeProvider } from '@mui/material/styles';
import { type FC, type PropsWithChildren } from 'react';
import { IndexRouter } from './routes/routes';
import { createTheme } from './shared/theme/theme';
import { CssBaseline } from '@mui/material';
import { SnackbarProvider } from './shared/component/ui/snackbar/Snackbar';

const App: FC<PropsWithChildren> = () => (
  <ThemeProvider theme={createTheme(createTheme())}>
    <CssBaseline />
    <SnackbarProvider>
      <IndexRouter />
    </SnackbarProvider>
  </ThemeProvider>
);

export default App;
