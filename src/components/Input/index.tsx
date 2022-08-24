import React from 'react'
import { IInputProps, Input as InputBase } from 'native-base'

export function Input({ ...rest }: IInputProps) {
  return (
    <InputBase
      flex={1}
      h={14}
      size="md"
      borderWidth={1}
      fontSize="md"
      fontFamily="body"
      color="white"
      borderColor="gray.500"
      placeholderTextColor="gray.300"
      _focus={{
        borderWidth: 1,
        borderColor: 'green.500',
        bg: 'gray.700'
      }}
      {...rest}
    />
  )
}
