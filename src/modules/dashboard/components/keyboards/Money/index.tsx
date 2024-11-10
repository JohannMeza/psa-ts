import { useState, useEffect, FC } from 'react';
// import { ICON } from '../../../../framework/components/form/icons/Icons';
import { Box } from '@mui/material';
import { useStyles } from './money-styles';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import BackspaceIcon from '@mui/icons-material/Backspace';
import SubdirectoryArrowLeftIcon from '@mui/icons-material/SubdirectoryArrowLeft';

const numbers = [
  { id: 'NUMBER', value: '7' },
  { id: 'NUMBER', value: '8' },
  { id: 'NUMBER', value: '9' },
  { id: 'NUMBER', value: '4' },
  { id: 'NUMBER', value: '5' },
  { id: 'NUMBER', value: '6' },
  { id: 'NUMBER', value: '1' },
  { id: 'NUMBER', value: '2' },
  { id: 'NUMBER', value: '3' },
  { id: 'NUMBER', value: '0' },
];

interface KeyProps {
  value: string
  // onChange: (event: React.ChangeEvent) => void
  // onEnter: () => void
}

export const Money: FC<KeyProps> = ({ value }) => {
  const { classes } = useStyles();
  const [number, setNumber] = useState('');
  // const [isInitial, setIsInitial] = useState(true);

  const actionTeclas = (): void => {
 
  };

  const handleDelete = (): void => {

  };

  const handleClickOperation = (): void => {

  };

  const handleEnter = (): void => {

  };

  useEffect(() => {
    setNumber('0.00');
  }, []);

  useEffect(() => {
    setNumber(value);
  }, [value]);

  return (
    <Box className={classes.tecladoNumerico}>
      <Box className={classes.tecladoCantidad}>
        <Box
          className={classes.tecladoNumericoButton}
          onClick={() => handleClickOperation()}
        >
          <RemoveIcon />
        </Box>
        <Box className={classes.tecladoNumericoCantidadIngresada}>{number}</Box>
        <Box
          className={classes.tecladoNumericoButton}
          onClick={() => handleClickOperation()}
        >
          <AddIcon />
        </Box>
      </Box>

      <Box
        className={`${classes.tecladoDelete} ${classes.tecladoNumericoButton}`}
        onClick={handleDelete}
      >
        <Box component="span"><BackspaceIcon /></Box>
      </Box>

      <Box className={classes.tecladoNumeros}>
        {numbers &&
          numbers.map((el) => (
            <Box
              key={`number_${el.value}`}
              onClick={() => actionTeclas()}
              className={classes.tecladoNumericoButton}
            >
              {el.value}
            </Box>
          ))}
      </Box>

      <Box
        className={`${classes.tecladoEnter} ${classes.tecladoNumericoButton}`}
        onClick={handleEnter}
      >
        <Box component="span"> ENTER </Box>
        <Box component="span"><SubdirectoryArrowLeftIcon /></Box>
      </Box>
    </Box>
  );
};
