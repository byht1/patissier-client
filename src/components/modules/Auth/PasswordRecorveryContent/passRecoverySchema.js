import * as yup from 'yup';

export const passRecoverySchema = yup.object({
  email: yup
    .string()
    .min(7, 'Має бути більше 7 символів')
    .max(63, 'Має бути менше 63 символів')
    .email(
      'Мінімум 2 символи перед @, не можна починати з тире, тільки латинські літери'
    )
    .required("Поле обов'язкове до заповнення")
    .matches(
      /^(?!-)[\w.-]{2,}@[\w-]+(\.[\w-]+)*\.[a-zA-Z]{2,}$/u,
      'Мінімум 2 символи перед @, не можна починати з тире, тільки латинські літери'
    ),
});
