import * as yup from 'yup';

export const authLoginSchema = yup
  .object()
  .shape({
    username: yup.string().label('Username').trim().min(1).max(30).required(),
    password: yup.string().label('Password').trim().min(1).max(30).required(),
  })
  .required();
