import { useState, useEffect, FC } from 'react';
// import { ICON } from '../../../../framework/components/form/icons/Icons';
import './KeyNumeric.css';
import { Box } from '@mui/material';
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

interface NumericProps {
  value: string
  // onChange: (event: React.ChangeEvent) => void
  // onEnter: () => void
}

export const Numeric: FC<NumericProps> = ({ value }) => {
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
    <Box className="tecladoNumerico">
      <Box className="teclado__cantidad">
        <Box
          className="tecladoNumerico__button"
          onClick={() => handleClickOperation()}
        >
          <RemoveIcon />
        </Box>
        <Box className="tecladoNumerico__cantidad-ingresada">{number}</Box>
        <Box
          className="tecladoNumerico__button"
          onClick={() => handleClickOperation()}
        >
          <AddIcon />
        </Box>
      </Box>

      <Box
        className="teclado__delete tecladoNumerico__button"
        onClick={handleDelete}
      >
        <Box component="span"><BackspaceIcon /></Box>
      </Box>

      <Box className="teclado__numeros">
        {numbers &&
          numbers.map((el) => (
            <Box
              key={`number_${el.value}`}
              onClick={() => actionTeclas()}
              className="tecladoNumerico__button"
            >
              {el.value}
            </Box>
          ))}
      </Box>

      <Box
        className="teclado__enter tecladoNumerico__button"
        onClick={handleEnter}
      >
        <Box component="span"> ENTER </Box>
        <Box component="span"><SubdirectoryArrowLeftIcon /></Box>
      </Box>
    </Box>
  );
};
