import React, { ReactElement, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { VALIDATION_SCHEMA } from 'app/constants'
import { addPlace } from 'app/api/Api'
import { addNewPlace } from 'app/actions/addNewPlace'
import { SubmitButton, ErrorMessage, Form, Input } from 'uikit'
import { IProps } from './types'

const schema = yup.object().shape({
  place: VALIDATION_SCHEMA.STRING,
  link: VALIDATION_SCHEMA.LINK
})

export const FormPlace: React.FC<IProps> = ({
  togglePlaceForm
}): ReactElement => {
  const [isLoading, setIsLoading] = useState(false)
  const dispatch = useDispatch()
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = async (values: {}) => {
    setIsLoading(!isLoading)
    dispatch(addNewPlace(await addPlace(values)))
    setIsLoading(!isLoading)
    togglePlaceForm()
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)} noValidate>
      <Input name="place" ref={register} placeholder="Название места" />
      <ErrorMessage>{errors.place?.message}</ErrorMessage>
      <Input name="link" ref={register} placeholder="Ссылка на картинку" />
      <ErrorMessage>{errors.link?.message}</ErrorMessage>
      <SubmitButton>Сохранить {isLoading && '...'}</SubmitButton>
    </Form>
  )
}
