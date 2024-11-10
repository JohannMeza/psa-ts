import { createEvent } from '@cobuildlab/react-simple-state';
import { UserProps } from './dashboard-types';

const userDefault: UserProps = {
  originalUserName: '',
  userId: '',
  userName: '',
};
export const userEvent = createEvent<UserProps>({ initialValue: userDefault });
export const userEventError = createEvent<Error>();
