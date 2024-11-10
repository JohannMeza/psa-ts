import { FC, PropsWithChildren } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { layoutDrawerOpen, layoutDrawerWidth } from '../layout/layout-events';
import { useEvent, useFetchAction } from '@cobuildlab/react-simple-state';
import { Stack } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import logo from '@src/shared/assets/logo/logo_fondo_blanco.png';
import { fetchMenus } from './sibdear-actions';
import { userEvent } from '@src/modules/dashboard/dashboard-events';
import { Link } from 'react-router-dom';
import { CSSProperties } from 'styled-components';

export const DrawerHeader = styled('div')(({ theme }) => ({
  ...theme.mixins.toolbar,
  display: 'flex',
  minHeight: '48px !important',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  justifyContent: 'flex-end',
}));

export const Sidebar: FC<PropsWithChildren> = () => {
  const styleLink: CSSProperties = { textDecoration: 'none' };
  const user = useEvent(userEvent);
  const theme = useTheme();
  const drawerwidth = useEvent(layoutDrawerWidth);
  const drawerOpen = useEvent(layoutDrawerOpen);

  const [menuData] = useFetchAction(fetchMenus, [user.userId]);

  const handleDrawerClose = (): void => {
    layoutDrawerOpen.dispatch(false);
  };

  return (
    <Drawer
      sx={{
        width: drawerwidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerwidth,
          boxSizing: 'border-box',
        },
      }}
      variant="persistent"
      anchor="left"
      open={drawerOpen}
    >
      <DrawerHeader sx={{ justifyContent: 'center', paddingY: 1 }}>
        <img src={logo} alt="Logotipo San Antonio" width={130} />
      </DrawerHeader>
      <Divider />
      <List>
        {menuData?.dataList?.map((item) => (
          <Link key={item.ID_OPCION} to={item.name} style={styleLink}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {item.ID_OPCION_PADRE % 2 === 0 ? (
                    <InboxIcon color="action" />
                  ) : (
                    <MailIcon color="action" />
                  )}
                </ListItemIcon>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <List>
        {['Configuracion', 'Salir'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? (
                  <InboxIcon color="action" />
                ) : (
                  <MailIcon color="action" />
                )}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Stack justifyContent="center" alignItems="center">
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'ltr' ? (
            <ChevronLeftIcon color="action" />
          ) : (
            <ChevronRightIcon color="primary" />
          )}
        </IconButton>
      </Stack>
    </Drawer>
  );
};
