import React from 'react'
import { Button, Flex, Text } from '@chakra-ui/react'

export const Materials = () => {

  return (
    <Flex bg='primary' w='full' h='99vh'>
      <Flex w='full' justifyContent='space-between' flexDirection='column'>
        <Text color='textColor' fontWeight='extrabold'>HIIIII</Text>
        <Button color='textColor' bg='secondary' _hover={{bg: 'accent'}}>Hover Testing</Button>
      </Flex>
    </Flex>
  )
}
