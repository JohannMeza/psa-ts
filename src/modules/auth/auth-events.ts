import { createEvent } from '@cobuildlab/react-simple-state';
import { Response } from './auth-types';

export const authUserEvent = createEvent<Response>();
export const authUserEventError = createEvent<Error>();
