import { createAction } from '@cobuildlab/react-simple-state';
import { userEvent, userEventError } from './dashboard-events';
import { axiosService } from '@src/shared/service/axios';
import { UserProps } from './dashboard-types';
import { AxiosResponse } from 'axios';
import { TOKEN_AUTH } from '@src/shared/constant';

export const accessUser = createAction(
  userEvent,
  userEventError,
  async (): Promise<UserProps> => {
    try {
      const response = await axiosService<UserProps, AxiosResponse<UserProps>>({
        method: 'POST',
        url: '/api/Auth/access',
        data: {},
      });
      userEvent.dispatch(response.data);
      return response.data;
    } catch (error) {
      const message = `Error ${error}`;
      console.error(message);
      sessionStorage.removeItem(TOKEN_AUTH);
      throw error;
    }
  },
);
