import { createEvent } from '@cobuildlab/react-simple-state';
import { MenuProps, Response } from './sidebar-types';

const defaultValue: Response<{ dataList: MenuProps[] }> = {
  dataList: [],
  dataObject: {},
  error: {},
  filtro: {
    endRow: 0,
    isPaginated: false,
    orderBy: 0,
    params: {},
    queryId: 0,
    startRow: 0,
    total: 0,
  },
  message: '',
  total: 0,
};

export const menuEvent = createEvent<Response<{ dataList: MenuProps[] }>>({
  initialValue: defaultValue,
});
export const menuEventError = createEvent<Error>();
