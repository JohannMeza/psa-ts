import { type FC, type PropsWithChildren } from 'react';
import { useNavigate } from 'react-router-dom';
// import { useValidateToken } from '../dashboard-hooks';

export const Adminview: FC<PropsWithChildren> = () => {
  const navigate = useNavigate();
  // useValidateToken();
  return (
    <>
      <button onClick={() => navigate('/dashboard/caja')}>Admin</button>
      <button onClick={() => navigate('/dashboard')}>Home</button>
    </>
  );
};
