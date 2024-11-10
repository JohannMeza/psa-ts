import { makeStyles } from 'tss-react/mui';
// import { MoneyProps } from './money-types';

export const useStyles = makeStyles()(() => ({
    tecladoNumericoButton: {
      zIndex: 1,
      '&:active': {
        boxShadow: '5px 5px 15px 0 rgba(0, 0, 0, 0.209)',
        transform: 'scale(1.05)',
        zIndex: 10,
      },
    },
    tecladoNumerico: {
      maxWidth: '600px',
      width: '100%',
      padding: '15px 0',
      display: 'grid',
      gridTemplateColumns: '1fr 30%',
      gridTemplateRows: '80px 1fr',
      gridGap: '15px',
      userSelect: 'none',
    },
    tecladoCantidad: {
      gridRow: '1 / span 1',
      display: 'grid',
      justifyContent: 'center',
      gridTemplateColumns: '25% 1fr 25%',
      background: '#EBECFF',
      fontSize: 20,
      fontStyle: 'italic',
      '& > div': {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      },
      '& > div:first-child, & > div:last-child': {
        background: '#D6D8F9',
      },
    },
    tecladoNumericoCantidadIngresada: {
      maxWidth: 130,
      padding: '0 15px',
      overflowY: 'auto',
    },
    tecladoDelete: {
      gridRow: '1 / span 1',
      gridColumn: '2 / span 1',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: 30,
      color: '#fff',
      background: '#011765',
      '& span': {
        transform: 'scale(1.5)',
      },
    },
    tecladoNumeros: {
      gridRow: '2 / span 2',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gridGap: 10,
      '& > div': {
        width: '100%',
        height: 80,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: '1px solid #ccc',
      },
      '& > div:last-child': {
        gridColumn: '1 / span 3',
      },
    },
    tecladoEnter: {
      gridColumn: '2 / span 1',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 25,
      color: '#fff',
      fontSize: 25,
      background: '#070942',
      '& > span:last-child': {
        transform: 'scale(1.5)',
      },
    },
  }));