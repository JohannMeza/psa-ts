import { useCallAction } from '@cobuildlab/react-simple-state';
import { accessUser } from './dashboard-actions';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export const useValidateToken = (): void => {
  const navigate = useNavigate();
  const [callAccessUser] = useCallAction(accessUser, {
    onError: () => navigate('/'),
  });

  useEffect(() => () => callAccessUser(), [callAccessUser]);

  return;
};
