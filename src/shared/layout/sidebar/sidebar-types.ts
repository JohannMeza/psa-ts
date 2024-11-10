export interface MenuProps {
  ID_OPCION: number;
  ID_OPCION_PADRE: number;
  ORDEN: number;
  TIPO_OPCION: number;
  name: string;
  url: string;
}

export interface Response<
  T extends {
    dataList?: unknown[];
    dataObject?: object;
    error?: object;
    params?: object;
  },
> {
  dataList: T['dataList'];
  dataObject?: T['dataObject'];
  error?: T['error'];
  filtro?: {
    endRow?: number;
    isPaginated?: boolean;
    orderBy?: number;
    params?: T['params'];
    queryId?: number;
    startRow?: number;
    total?: number;
  };
  message?: string;
  total?: number;
}
