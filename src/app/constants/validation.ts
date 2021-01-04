import * as yup from 'yup'

export const VALIDATION_SCHEMA = {
  LINK: yup
    .string()
    .url('Ссылка должна быть валидной')
    .required('Это поле обязательное'),
  STRING: yup
    .string()
    .matches(/^([\w\W]{2,30})$/, 'Должно быть от 2 до 30 символов')
}
