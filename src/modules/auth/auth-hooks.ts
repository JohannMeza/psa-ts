import { yupResolver } from '@hookform/resolvers/yup';
import { UseFormProps, useForm } from 'react-hook-form';
import { AuthLoginFormType } from './auth-types';
import { authLoginSchema } from './auth-validators';

/**
 * @param {UseFormProps<AuthLoginFormType>} props - Props hooks.
 * @returns Hook form object.
 */
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function useAuthLoginForm(props?: UseFormProps<AuthLoginFormType>) {
  return useForm<AuthLoginFormType>({
    resolver: yupResolver(authLoginSchema, { abortEarly: false }),
    ...props,
  });
}
