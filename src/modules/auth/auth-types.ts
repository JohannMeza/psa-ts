import { authLoginSchema } from './auth-validators';

export type AuthLoginFormType = (typeof authLoginSchema)['__outputType'];

export interface Response {
  message: string;
}

export interface SignUserCredential {
  PASSWORD: string;
  USERNAME: string;
  IP_TIENDA_ESTACION: number;
}
