import { Box, styled } from '@mui/material';

export const MainContent = styled(Box)(({ theme }) => ({
  width: '100%',
  height: 'calc(100% - 48px)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: theme.spacing(3),
  alignItems: 'center',
  padding: theme.spacing(3),
}));
