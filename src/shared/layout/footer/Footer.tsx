import { FC, PropsWithChildren } from 'react';
import { styled } from '@mui/material/styles';
import { useEvent } from '@cobuildlab/react-simple-state';
import { layoutDrawerOpen, layoutDrawerWidth } from '../layout/layout-events';
import { LayoutDrawerWidthProps } from '../layout/layout-types';
import { Box, Button, Stack, Toolbar } from '@mui/material';
import { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';

interface FooterBarProps extends MuiAppBarProps {
  open?: boolean;
  drawerwidth: LayoutDrawerWidthProps;
}

const FooterBar = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'open',
})<FooterBarProps>(({ theme, open, drawerwidth }) => ({
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

export const Footer: FC<PropsWithChildren> = () => {
  const drawerwidth = useEvent(layoutDrawerWidth);
  const drawerOpen = useEvent(layoutDrawerOpen);

  // const handleDrawerOpen = (): void => layoutDrawerOpen.dispatch(true);

  return (
    <FooterBar open={drawerOpen} drawerwidth={drawerwidth}>
      <Toolbar>
        <Stack flexDirection="row" justifyContent="space-between" width={1}>
          <Stack flexDirection="row" gap={2}>
            <Button variant="outlined" color="secondary">
              PROGRAMAR
            </Button>
            <Button variant="outlined" color="secondary">
              UNIR CUENTA
            </Button>
            <Button variant="outlined" color="secondary">
              TRANSFERIR P.
            </Button>
            <Button variant="outlined" color="secondary">
              DOCUMENTOS
            </Button>
            <Button variant="outlined" color="secondary">
              DOCUMENTOS
            </Button>
            <Button variant="outlined" color="secondary">
              CIERRE TURNO
            </Button>
          </Stack>

          <Button variant="contained" color="secondary">
            NUEVO PEDIDO
          </Button>
        </Stack>
      </Toolbar>
    </FooterBar>
  );
};
