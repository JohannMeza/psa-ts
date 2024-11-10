import { createAction } from '@cobuildlab/react-simple-state';
import { authUserEvent, authUserEventError } from './auth-events';
import { axiosService } from '@src/shared/service/axios';
import { Response, SignUserCredential } from './auth-types';
import { AxiosResponse } from 'axios';
import { TOKEN_AUTH } from '@src/shared/constant';

const fetchLoginToken = async (user: SignUserCredential): Promise<object> => {
  try {
    const { USERNAME, PASSWORD } = user;
    const response = await axiosService({
      method: 'POST',
      url: '/api/Auth/login',
      data: { username: USERNAME, password: PASSWORD },
    });
    sessionStorage.setItem(TOKEN_AUTH, response.data.accessToken);
    return response;
  } catch (error) {
    const message = `Error ${error}`;
    console.error(message);
    sessionStorage.removeItem(TOKEN_AUTH);
    throw error;
  }
};

export const fetchLoginAuthentication = createAction(
  authUserEvent,
  authUserEventError,
  async (auth: SignUserCredential) => {
    try {
      const response = await axiosService<Response, AxiosResponse<Response>>({
        method: 'POST',
        url: '/api/ReadUtil/GetData',
        data: { params: auth, queryId: 434 },
      });
      await fetchLoginToken(auth);
      return response.data;
    } catch (error) {
      const message = `Error ${error}`;
      console.error(message);
      throw error;
    }
  },
);
