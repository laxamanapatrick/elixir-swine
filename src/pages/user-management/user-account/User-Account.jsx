import React from "react";
import { ScrollFeature } from "../../../utils/Scroll-Feature";
import {
  Button,
  Flex,
  Input,
  Select,
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

  const { data: userAccountData } = useFetchUsersApi(
    status,
    search,
    currentPage,
    pageSize,
    setPageTotal
  );

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
        <ScrollFeature maxHeight="70vh">
          <Table variant="simple" size="sm">
            <Thead
              position="sticky"
              zIndex="docked"
              top={0}
              bgColor="secondary"
            >
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
      </Flex>
    </VStack>
  );
};
