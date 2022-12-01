import React from 'react'
import { ScrollFeature } from '../../../utils/Scroll-Feature'
import { Button, Flex, Input, Select, Table, Tbody, Td, Th, Thead, Tr, VStack } from '@chakra-ui/react'
import { Pagination, PaginationContainer, PaginationNext, PaginationPage, PaginationPageGroup, PaginationPrevious } from '@ajna/pagination'
import { useFetchUsersApi } from './api/user-account.services'

export const UserAccount = () => {

  const userStatus = true
  const pageNumber = 1
  const pageSize = 10
  const search = ''

  const { data } = useFetchUsersApi(userStatus, pageNumber, pageSize, search)

  console.log(data)

  return (
    <VStack h='91.5vh' bgColor='primary' p={5}>

      <Flex w='full' justifyContent='space-between'>
        <Input w='auto' />
        <Select w='auto'>
          <option>1</option>
          <option>sadasdsdsa</option>
        </Select>
      </Flex>

      <Flex w='full'>
        <ScrollFeature minHeight='50vh' maxHeight='70vh'>
          <Table variant='simple' size='sm'>
            <Thead position='sticky' zIndex='docked' top={0} bgColor='secondary'>
              <Tr>
                <Th>Hi</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>Hello</Td>
              </Tr>
            </Tbody>
          </Table>
        </ScrollFeature>
      </Flex>

      <Flex w='full' justifyContent='space-between'>
        <Button size='sm' leftIcon={'icon'}>New User</Button>
        <Pagination
        // pagesCount={pagesCount}
        // currentPage={currentPage}
        // onPageChange={handlePageChange}
        >
          <PaginationContainer gap={1}>
            <PaginationPrevious bgColor='primary' color='myWhite' size='sm' _hover={{ bgColor: 'myWhite', color: 'primary' }}>{`<<`}</PaginationPrevious>
            <PaginationPageGroup>
              {/* {pages.map((page) => (
                <PaginationPage
                  size='sm' bgColor='primary' color='myWhite' _hover={{ bgColor: 'myWhite', color: 'primary' }} px={2}
                  key={`pagination_page_${page}`}
                  page={page}
                />
              ))} */}
            </PaginationPageGroup>
            <PaginationNext bgColor='primary' color='myWhite' size='sm' _hover={{ bgColor: 'myWhite', color: 'primary' }}>{`>>`}</PaginationNext>
            <Select
              // onChange={handlePageSizeChange}
              w='40%' size='sm'
            >
              <option value={Number(5)}>5</option>
              <option value={Number(10)}>10</option>
              <option value={Number(25)}>25</option>
              <option value={Number(50)}>50</option>
            </Select>
          </PaginationContainer>
        </Pagination>
      </Flex>

    </VStack>
  )
}
