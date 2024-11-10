import { createAction } from '@cobuildlab/react-simple-state';
import { menuEvent, menuEventError } from './sidebar-events';
import { axiosService } from '@src/shared/service/axios';
import { AxiosResponse } from 'axios';
import { MenuProps, Response } from './sidebar-types';

export const fetchMenus = createAction(
  menuEvent,
  menuEventError,
  async (id_user: string): Promise<Response<{ dataList: MenuProps[] }>> => {
    try {
      const response = await axiosService<
        Response<{ dataList: MenuProps[] }>,
        AxiosResponse<Response<{ dataList: MenuProps[] }>>
      >({
        method: 'POST',
        url: '/api/ReadUtil/GetData',
        data: { params: { id_user }, queryId: 298 },
      });

      console.log(response.data);
      return response.data;
    } catch (error) {
      const message = `Error ${error}`;
      console.error(message);
      throw error;
    }
  },
);
