import React, { ReactElement, useState, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { VALIDATION_SCHEMA } from 'app/constants'
import { updateUserNameAndAbout } from 'app/actions/updateUserNameAndAbout'
import { SubmitButton, ErrorMessage, Form, Input } from 'uikit'
import { IProps } from './types'

const schema = yup.object().shape({
  name: VALIDATION_SCHEMA.STRING,
  about: VALIDATION_SCHEMA.STRING
})

export const FormUserInfo: React.FC<IProps> = ({
  toggleUserInfoForm
}): ReactElement => {
  const [isUserInfoLoading, setIsUserInfoLoading] = useState(false)
  const dispatch = useDispatch()
  const userInfo = useSelector(
    (state: { userInfo: { name?: string; about?: string } }) => state.userInfo
  )

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: userInfo.name,
      about: userInfo.about
    }
  })

  const onSubmit = useCallback(async (values: {}) => {
    setIsUserInfoLoading(!isUserInfoLoading)
    await dispatch(updateUserNameAndAbout(values))
    setIsUserInfoLoading(!isUserInfoLoading)
    toggleUserInfoForm()
  }, [])

  return (
    <Form onSubmit={handleSubmit(onSubmit)} noValidate>
      <Input name="name" ref={register} placeholder="Имя" />
      <ErrorMessage>{errors.name?.message}</ErrorMessage>
      <Input name="about" ref={register} placeholder="О себе" />
      <ErrorMessage>{errors.about?.message}</ErrorMessage>
      <SubmitButton>Сохранить {isUserInfoLoading && '...'}</SubmitButton>
    </Form>
  )
}
