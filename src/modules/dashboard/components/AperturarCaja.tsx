import { FC, PropsWithChildren } from 'react';
import { Button, Grid, Stack, TextField, Typography } from '@mui/material';
import { snackbar } from '@src/shared/component/ui/snackbar/Snackbar';
import { Letter } from './keyboards/Letter';
import { Money } from './keyboards/Money';


export const AperturarCaja: FC<PropsWithChildren> = () => {
  const handleSnackbar = (): void => snackbar.success('Hola');

  return (
    <Stack gap={5} justifyContent="center" alignItems="center" minHeight={1}>
      <Typography variant='h6' component='span'>VAMOS A APERTURAR NUESTRA CAJA</Typography>
      <Grid container spacing={3} maxWidth={850}>
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={6}>
              <Typography variant='body1'>MONEDA PRINCIPAL</Typography>
            </Grid>
            <Grid item xs={6}>
              <TextField fullWidth={true} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={6}>
              <Typography variant='body1'>MONEDA EXTRANJERA</Typography>
            </Grid>
            <Grid item xs={6}>
              <TextField fullWidth={true} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={6}>
              <Typography variant='body1'>PRECIO DE VENTA</Typography>
            </Grid>
            <Grid item xs={6}>
              <TextField fullWidth={true} />
            </Grid>
          </Grid>        
        </Grid>
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={6}>
              <Typography variant='body1'>PRECIO DE COMPRA</Typography>
            </Grid>
            <Grid item xs={6}>
              <TextField fullWidth={true} />
            </Grid>
          </Grid>        
        </Grid>
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={6}>
              <Typography variant='body1'>INGRESA MONTOS DE INICIO DEL TURNO</Typography>
            </Grid>
            <Grid item xs={6}>
              <Grid container spacing={3}>
                <Grid item xs={6}>
                  <Typography variant='body1'>Monto Soles</Typography>
                  <TextField fullWidth={true} />
                </Grid>
                <Grid item xs={6}>
                  <Typography variant='body1'>Monto Dólares</Typography>
                  <TextField fullWidth={true} />
                </Grid>
              </Grid>
            </Grid>
          </Grid>        
        </Grid>
      </Grid>
      <Stack flexDirection="row" justifyContent="center" gap={3}>
        <Button variant='contained' color='secondary'>CANCELAR</Button>
        <Button variant='contained' onClick={handleSnackbar}>CONFIRMAR</Button>
      </Stack>

      <Letter />
      <Money value='' />
    </Stack>
  );
};