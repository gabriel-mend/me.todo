import React from 'react'
import { HStack, MinusIcon, Text } from 'native-base'

type Task = {
  id: string
  name: string
  status: boolean
}

export function Task({ id, name }: Task) {
  return (
    <HStack
      bg="gray.500"
      h={14}
      borderRadius={8}
      mt={4}
      key={id}
      flex={1}
      w="full"
      alignItems="center"
      justifyContent="space-between"
      px={6}
    >
      <Text color="white">{name}</Text>
      <MinusIcon />
    </HStack>
  )
}
