import React, { ReactElement, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { VALIDATION_SCHEMA } from 'app/constants'
import { updateUserAvatar } from 'app/actions/updateUserAvatar'
import { SubmitButton, ErrorMessage, Form, Input } from 'uikit'

import { IProps } from './types'

const schema = yup.object().shape({
  avatar: VALIDATION_SCHEMA.LINK
})

export const FormAvatar: React.FC<IProps> = ({
  toggleAvatarForm
}): ReactElement => {
  const [isLoading, setIsLoading] = useState(false)
  const dispatch = useDispatch()
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = async (values: {}) => {
    setIsLoading(!isLoading)
    await dispatch(updateUserAvatar(values))
    setIsLoading(!isLoading)
    toggleAvatarForm()
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)} noValidate>
      <Input
        name="avatar"
        ref={register}
        placeholder="Вставьте ссылку на картинку"
      />
      <ErrorMessage>{errors.avatar?.message}</ErrorMessage>
      <SubmitButton>Сохранить {isLoading && '...'}</SubmitButton>
    </Form>
  )
}
