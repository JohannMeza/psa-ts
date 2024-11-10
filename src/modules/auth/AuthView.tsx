import {
  ButtonBase,
  Grid,
  // InputBase,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { useEffect, type FC, type PropsWithChildren } from 'react';
import { ContentForm, MainAuth } from './auth-styles';
import { useCallAction } from '@cobuildlab/react-simple-state';
import { fetchLoginAuthentication } from './auth-actions';
import { useNavigate } from 'react-router-dom';
import { TOKEN_AUTH } from '@src/shared/constant';
import { useAuthLoginForm } from './auth-hooks';
import { snackbar } from '@src/shared/component/ui/snackbar/Snackbar';
import { handleFormErrors } from '@src/shared/utils/errors';
import { Controller } from 'react-hook-form';
import { LoadingButton as Button } from '@mui/lab';
import logoPsa from '@src/shared/assets/logo/logo_fondo_blanco.png';
import logoEmilia from '@src/shared/assets/logo/logo_emilia.png';
import iconHuella from '@src/shared/assets/icon/huella.svg';

export const AuthView: FC<PropsWithChildren> = () => {
  const navigate = useNavigate();

  const { handleSubmit, control, formState } = useAuthLoginForm({
    defaultValues: {
      username: '',
      password: '',
    },
  });

  const [, loading] = useCallAction(
    fetchLoginAuthentication,
    {
      onCompleted(resp) {
        snackbar.success(resp?.message ?? '');
        navigate('/dashboard');
      },
      onError(error) {
        snackbar.error(error.message);
      },
    },
  );

  const onFormSubit = handleSubmit(
    async (dataForm) => {
      console.log(dataForm);
      navigate('/dashboard');

      // callLoginAuthentication({
      //   USERNAME: dataForm.username,
      //   PASSWORD: dataForm.password,
      //   IP_TIENDA_ESTACION: 3,
      // });
    },
    (error) => {
      handleFormErrors(error);
    },
  );

  useEffect(() => {
    if (sessionStorage.getItem(TOKEN_AUTH)) navigate('/dashboard');
  }, [navigate]);

  return (
    <MainAuth>
      <ContentForm component="form" onSubmit={onFormSubit}>
        <img src={logoPsa} alt="Logo San Antonio" width={140} />

        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Controller
              name="username"
              control={control}
              render={({ field: { onChange, value, ...rest } }) => (
                <TextField
                  type="text"
                  value={value}
                  onChange={onChange}
                  placeholder="Usuario"
                  fullWidth
                  error={!!formState.errors.username?.message}
                  {...rest}
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="password"
              control={control}
              render={({ field: { onChange, value, ...rest } }) => (
                <TextField
                  onChange={onChange}
                  value={value}
                  type="password"
                  placeholder="Contraseña"
                  fullWidth
                  error={!!formState.errors.password?.message}
                  {...rest}
                />
              )}
            />
          </Grid>
        </Grid>

        <ButtonBase sx={{ paddingX: 3, paddingY: 1, borderRadius: 2 }}>
          <Stack alignItems="center">
            <img src={iconHuella} alt="Icono de la huella" width={100} />
            <Typography>Ingresar con huella digital</Typography>
          </Stack>
        </ButtonBase>

        <Button
          disabled={loading}
          loading={loading}
          variant="contained"
          color="primary"
          type="submit"
          fullWidth
          // onClick={handleCallAuthentication}
        >
          Iniciar Sesión
        </Button>

        <img src={logoEmilia} alt="Logo San Antonio" width={200} />
      </ContentForm>
    </MainAuth>
  );
};
