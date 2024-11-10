import { type FC, type PropsWithChildren } from 'react';
// import { useValidateToken } from '../dashboard-hooks';
import { AperturarCaja } from '../components/AperturarCaja';

export const CajaView: FC<PropsWithChildren> = () => {
  console.log();
  // useValidateToken();

  return <AperturarCaja />;
};
