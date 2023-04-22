import * as yup from 'yup';

export const signInSchema = yup.object({
  login: yup
    .string()
    .min(7, 'Must be more than 7 characters')
    .max(63, 'Must be less than 63 characters')
    .email(
      'minimum 2 characters before @, cannot start with a dash, only Latin letters'
    )
    .required('The field is mandatory')
    .matches(
      /^(?!-)[\w.-]{2,}@[\w-]+(\.[\w-]+)*\.[a-zA-Z]{2,}$/u,
      'minimum 2 characters before @, cannot start with a dash, only Latin letters'
    ),
  password: yup
    .string()
    .required('The field is mandatory')
    .max(32, 'Must be less than 32 characters')
    .matches(
      /(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*_]{7,}/,
      'The password must contain uppercase and lowercase letters, at least 7 symbols'
    ),
});
