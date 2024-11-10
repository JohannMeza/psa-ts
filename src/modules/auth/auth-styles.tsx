import { Box, styled } from '@mui/material';
import BgAuth from '@src/shared/assets/background.png';

export const MainAuth = styled(Box)(() => ({
  background: `url(${BgAuth})`,
  backgroundSize: 'cover',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
}));

export const ContentForm = styled(Box)(({ theme }) => ({
  minWidth: 350,
  maxWidth: 400,
  backgroundColor: theme.palette.opacity[500],
  backdropFilter: 'blur(12px)',
  padding: 20,
  borderRadius: 15,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '15px',
}));
