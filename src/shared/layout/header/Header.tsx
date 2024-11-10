import { styled } from '@mui/material/styles';
import { FC, PropsWithChildren } from 'react';
import { layoutDrawerOpen, layoutDrawerWidth } from '../layout/layout-events';
import { useEvent } from '@cobuildlab/react-simple-state';
import { LayoutDrawerWidthProps } from '../layout/layout-types';
import { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { userEvent } from '@src/modules/dashboard/dashboard-events';
import { Box } from '@mui/material';

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
  drawerwidth: LayoutDrawerWidthProps;
}

const AppBar = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open, drawerwidth }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `100%`,
    marginLeft: `${drawerwidth}x`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export const Header: FC<PropsWithChildren> = () => {
  const drawerwidth = useEvent(layoutDrawerWidth);
  const drawerOpen = useEvent(layoutDrawerOpen);
  const user = useEvent(userEvent);

  const handleDrawerOpen = (): void => layoutDrawerOpen.dispatch(true);

  return (
    <AppBar open={drawerOpen} drawerwidth={drawerwidth}>
      <Toolbar>
        <IconButton
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{ mr: 2, ...(drawerOpen && { display: 'none' }) }}
        >
          <MenuIcon color="inherit" />
        </IconButton>
        <Typography variant="h6" noWrap component="div" color="white">
          Bienvenido: {user.userName}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
