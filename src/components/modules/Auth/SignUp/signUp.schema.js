import * as yup from 'yup';

export const sigUpSchema = yup.object({
  email: yup
    .string()
    .min(
      7,
      //'Must be more than 7 characters'
      'Має бути більше ніж 7 символів'
    )
    .max(
      63,
      //'Must be less than 63 characters'
      'Має бути менше ніж 63 символа'
    )
    .email(
      //'minimum 2 characters before @, cannot start with a dash, only Latin letters'
      'Має бути мінімум 2 символи перед @, не можна починати з тире, тільки латинські літери'
    )
    .required(
      //'The field is mandatory'
      "Поле є обов'язковим"
    )
    .matches(
      /^(?!-)[\w.-]{2,}@[\w-]+(\.[\w-]+)*\.[a-zA-Z]{2,}$/u,
      //'minimum 2 characters before @, cannot start with a dash, only Latin letters'
      'Має бути мінімум 2 символи перед @, не можна починати з тире, тільки латинські літери'
    ),
  password: yup
    .string()
    .required(
      //'The field is mandatory'
      "Поле є обов'язковим"
    )
    .max(
      32,
      // 'Must be less than 32 characters'
      'Має бути менше ніж 32 символа'
    )
    .matches(
      /(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*_]{7,}/,
      //'The password must contain uppercase and lowercase letters, at least 7 symbols'
      'Пароль повинен містити великі та малі літери, мінімум 7 символів'
    ),
  name: yup
    .string()
    .min(
      2,
      //'Must be more than 2 characters'
      'Має бути більше ніж 2 символи'
    )
    .max(
      40,
      // 'Must be less than 40 characters'
      'Має бути менше ніж 40 символів'
    )
    .matches(
      /^[A-Za-zА-Яа-яЁёҐґІіЇїЄє\s,'"'-.]+(?:\s+[A-Za-zА-Яа-яЁёҐґІіЇїЄє]+){0,3}$/u,
      // 'Not a valid name'
      "Недійсне ім'я"
    )
    .required(
      //'The field is mandatory'
      "Поле є обов'язковим"
    ),
  phone: yup
    .string()
    .required(
      //'The field is mandatory'
      "Поле є обов'язковим"
    )
    .matches(
      /^\+38?(0\d{9})$/,
      // 'Number format:+380500000000'
      'Формат номера: +380500000000'
    ),
});
