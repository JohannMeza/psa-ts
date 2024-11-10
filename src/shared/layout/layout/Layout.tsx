import { FC, PropsWithChildren } from 'react';
import { Header } from '../header/Header';
import { styled } from '@mui/material';
import { Sidebar } from '../sidebar/Sidebar';
import { layoutDrawerOpen, layoutDrawerWidth } from './layout-events';
import { useEvent } from '@cobuildlab/react-simple-state';
import { Box, CssBaseline } from '@mui/material';
import { Footer } from '../footer/Footer';

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean;
  drawerwidth: number;
}>(({ theme, open, drawerwidth }) => ({
  width: '100vw',
  height: '100vh',
  display: 'grid',
  gridTemplateRows: 'auto 1fr auto',
  background: theme.palette.purple['50'],
  overflow: 'auto',
  flexGrow: 1,
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerwidth}px`,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

const Body = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '100%',
  minHeight: '100%',
  padding: theme.spacing(4),
  overflow: 'auto',
}));

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  const drawerwidth = useEvent(layoutDrawerWidth);
  const drawerOpen = useEvent(layoutDrawerOpen);

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Sidebar />
      <Main open={drawerOpen} drawerwidth={drawerwidth}>
        <Header />
        <Body children={children} />
        <Footer />
      </Main>
    </Box>
  );
};
