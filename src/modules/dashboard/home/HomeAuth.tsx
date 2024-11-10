import { type FC, type PropsWithChildren } from 'react';
// import { useValidateToken } from '../dashboard-hooks';
// import { useNavigate } from 'react-router-dom';
// import { TOKEN_AUTH } from '@src/shared/constant';
import { Typography } from '@mui/material';
import { MainContent } from './home-styles';
import logoPsa from '@src/shared/assets/logo/logo_psa_sin_fondo.png';
import logoEmilia from '@src/shared/assets/logo/logo_emilia.png';

export const HomeView: FC<PropsWithChildren> = () => {
  console.log();
  // useValidateToken();
  // const navigate = useNavigate();
  // const logout = (): void => {
  //   navigate('/');
  //   sessionStorage.removeItem(TOKEN_AUTH);
  // };

  return (
    <MainContent>
      <Typography
        component="h4"
        variant="h3"
        className="color-texto-2"
        sx={{ fontWeight: 600, fontSize: '40px', textAlign: 'center' }}
      >
        Te damos la Bienvenida
      </Typography>
      <img
        src={logoPsa}
        alt="Logotipo San Antonio"
        style={{ width: '100%', maxWidth: '500px' }}
      />
      <img
        src={logoEmilia}
        alt="Logotipo Emilia"
        style={{ width: '100%', maxWidth: '300px' }}
      />
    </MainContent>
  );
};
