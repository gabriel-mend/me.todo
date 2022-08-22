import { HStack, VStack } from 'native-base'
import React from 'react'

export function Home() {
  return (
    <VStack flex={1} bg="gray.700" pb={6}>
      <HStack
        w="full"
        justifyContent="space-between"
        alignItems="center"
        bg="gray.600"
        pt={12}
        pb={5}
        px={6}
      ></HStack>
    </VStack>
  )
}
