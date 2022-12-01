import { useQuery } from '@tanstack/react-query'
import baseURL from '../../../../services/baseURL'

export const useFetchUsersApi = (userStatus, pageNumber, pageSize, search) => {
    return useQuery(
        ['User Account', userStatus, pageNumber, pageSize, search],
        async () => {
            try {
                const res = await baseURL.get(`User/GetAllUsersWithPaginationOrig/${userStatus}?pageNumber=${pageNumber}&pageSize=${pageSize}&search=${search}`)
                return res.data
            } catch (error) {
                console.log(error)
            }
        }
    )
}
