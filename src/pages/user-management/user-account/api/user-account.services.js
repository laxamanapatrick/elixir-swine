import { useQuery } from "@tanstack/react-query";
import baseURL from "../../../../services/baseURL";

export const useFetchUsersApi = (
  userStatus,
  search,
  currentPage,
  pageSize,
  setPageTotal
) => {
  return useQuery(
    ["User Account", userStatus, search, currentPage, pageSize],
    async () => {
      try {
        const res = await baseURL.get(
          `User/GetAllUsersWithPaginationOrig/${userStatus}?pageNumber=${currentPage}&pageSize=${pageSize}&search=${search}`
        );
        setPageTotal(res.data.totalCount);
        return res.data;
      } catch (error) {
        console.log("Data not fetched, please check your server");
      }
    }
  );
};
