import React from "react";
import { ScrollFeature } from "../../../utils/Scroll-Feature";
import {
  Button,
  Flex,
  Input,
  Select,
  Skeleton,
  Stack,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  VStack,
} from "@chakra-ui/react";
import { useFetchUsersApi } from "./api/user-account.services";
import { MyPagination, usePageUtilities } from "../../../utils/Page-Utilities";

export const UserAccount = () => {
  const {
    search,
    setSearch,
    status,
    setStatus,
    currentPage,
    setCurrentPage,
    pageSize,
    setPageSize,
    pagesCount,
    pages,
    setPageTotal,
  } = usePageUtilities();

  const {
    data: userAccountData,
    isError: noDataFound,
    isLoading,
  } = useFetchUsersApi(status, search, currentPage, pageSize, setPageTotal);

  return (
    <VStack h="91.5vh" bgColor="primary" p={5}>
      <Flex w="full" justifyContent="space-between">
        <Input w="auto" onChange={(e) => setSearch(e.target.value)} />
        <Select
          w="auto"
          onChange={(e) => setStatus(JSON.parse(e.target.value))}
        >
          <option value={true}>Active</option>
          <option value={false}>Inactive</option>
        </Select>
      </Flex>

      <Flex w="full" flexDirection="column" gap={5}>
        {noDataFound || isLoading ? (
          <Stack>
            <Skeleton height="20px" />
            <Skeleton height="20px" />
            <Skeleton height="20px" />
          </Stack>
        ) : (
          <>
            <ScrollFeature maxHeight="70vh">
              <Table variant="unstyled" size="sm">
                <Thead
                  position="sticky"
                  zIndex="docked"
                  top={0}
                  bgColor="secondary"
                >
                  <Tr>
                    <Th py={3} color="myWhite">User Name</Th>
                    <Th color="myWhite">Password</Th>
                    <Th color="myWhite">Full Name</Th>
                    <Th color="myWhite">Department</Th>
                    <Th color="myWhite">Role</Th>
                    <Th color="myWhite">Date Added</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {userAccountData?.user.map((user) => (
                    <Tr cursor='pointer' key={user.id}>
                      <Td>{user.userName}</Td>
                      <Td>{user.password}</Td>
                      <Td>{user.fullName}</Td>
                      <Td>{user.department}</Td>
                      <Td>{user.userRole}</Td>
                      <Td>{user.dateAdded}</Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </ScrollFeature>

            <Flex w="full" justifyContent="space-between">
              <Button size="sm" leftIcon={"icon"}>
                New User
              </Button>

              <MyPagination
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                pageSize={pageSize}
                setPageSize={setPageSize}
                pagesCount={pagesCount}
                pages={pages}
              />
            </Flex>
          </>
        )}
      </Flex>
    </VStack>
  );
};
